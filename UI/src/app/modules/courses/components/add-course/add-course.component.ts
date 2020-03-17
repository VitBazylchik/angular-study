import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/app/modules/shared/models/author';
import { Course } from 'src/app/modules/shared/models/course';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl } from '@angular/forms';
import { dateValidator } from './validations/date';
import { durationValidator } from './validations/duration';
import { Store, select } from '@ngrx/store';
import { loadCourseToEdit, editCourse, addCourse, clearState } from '../../store/courses.actions';
import { selectCourse } from '../../store/selectors';
import * as moment from 'moment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit, OnDestroy {
  public isEditCourse: boolean = this.activeRoute.snapshot.data.edit;
  public addCourseForm: FormGroup;
  public titleControl: FormControl;
  public descriptionControl: FormControl;
  public dateControl: FormControl;
  public durationControl: FormControl;
  public authorsControl: FormArray;
  public id: number;
  public courseSubs: Subscription;
  public authorToEdit: number;
  private maxTitleLength = 50;
  private maxDescriptionLength = 500;
  private maxDateLength = 10;
  private maxDurationLength = 3;

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {}

  private buildForm(maxTitleLength: number, maxDescriptionLength: number, maxDateLength: number, maxDurationLength: number): FormGroup {
    this.titleControl = this.fb.control('', [Validators.maxLength(maxTitleLength), Validators.required]);
    this.descriptionControl = this.fb.control('', [Validators.maxLength(maxDescriptionLength), Validators.required]);
    this.dateControl = this.fb.control('', [dateValidator, Validators.required, Validators.maxLength(maxDateLength)]);
    this.durationControl = this.fb.control('', [Validators.required, Validators.maxLength(maxDurationLength), durationValidator]);
    this.authorsControl = this.fb.array([]);
    return this.fb.group({
      title: this.titleControl,
      description: this.descriptionControl,
      date: this.dateControl,
      duration: this.durationControl,
      authors: this.authorsControl,
    });
  }

  private getId(): number {
    return parseInt(this.activeRoute.snapshot.params.id, 10);
  }

  get authors(): FormArray {
    return this.authorsControl.value;
  }

  initAuthor(author: Author): FormGroup {
    const { name, lastName }: Author = author;
    return this.fb.group({
      name: [name, Validators.required],
      lastName: [lastName]
    });
  }

  addAuthor = (author?: Author): void => {
    const authorToAdd = author || {name: 'Name', lastName: 'Surname'};
    const newAuthor = this.initAuthor(authorToAdd);
    this.authorsControl.push(newAuthor);
  }

  removeAuthor(authorNum: number): void {
    if (this.authorsControl.length !== 1) {
      this.authorsControl.removeAt(authorNum);
    }
  }

  toggleEdit(index: number): void {
    this.authorToEdit = this.authorToEdit === index ? null : index;
  }

  ngOnInit(): void {
    this.addCourseForm = this.buildForm(this.maxTitleLength, this.maxDescriptionLength, this.maxDateLength, this.maxDurationLength);
    if (this.isEditCourse) {
      this.id = this.getId();
      this.store.dispatch(loadCourseToEdit({id: this.id}));
      const currentCourse$ = this.store.pipe(select(selectCourse));
      this.courseSubs = currentCourse$.subscribe((course: Course) => {
        if (course) {
          course.authors.forEach(this.addAuthor);
          this.addCourseForm.patchValue({
            title: course.name,
            description: course.description,
            date: moment(course.date).format('DD.MM.YYYY'),
            duration: course.length,
          });
        }
      });
    } else {
      this.addCourseForm.patchValue({date: moment(Date.now()).format('DD.MM.YYYY')});
    }
  }

  ngOnDestroy(): void {
    this.store.dispatch(clearState());
  }

  onSave(): void {
    const authorData = this.addCourseForm.value;
    const length = parseInt(authorData.duration, 10);
    const item = {
      id: this.id || null,
      name: authorData.title,
      description: authorData.description,
      date: moment(authorData.date, 'DD.MM.YYYY').format(),
      length,
      authors: authorData.authors,
      isTopRated: false,
    };
    this.id
      ? this.store.dispatch(editCourse(item))
      : this.store.dispatch(addCourse(item));
  }

  public onCancel(): void {
    console.log(this.addCourseForm);
    if (confirm('Do you want to cancel editing?')) {
      this.router.navigate(['..']);
    }
  }
}
