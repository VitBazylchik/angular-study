import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/app/modules/shared/models/author';
import { Course } from 'src/app/modules/shared/models/course';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
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
  public isEditCourse = this.activeRoute.snapshot.data.edit;
  public addCourseForm: FormGroup;
  public id: number;
  public openEditor = false;
  public courseSubs: Subscription;

  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {
    const maxTitleLength = 50;
    const maxDescriptionLength = 500;
    this.addCourseForm = this.fb.group({
      title: ['', [Validators.maxLength(maxTitleLength), Validators.required]],
      description: ['', [Validators.maxLength(maxDescriptionLength), Validators.required]],
      date: ['', [dateValidator, Validators.required, Validators.maxLength(10)]],
      duration: ['', [Validators.required, Validators.maxLength(3), durationValidator]],
      authors: this.fb.array([]),
    });
  }

  get authorsArr(): FormArray {
    return <FormArray>this.addCourseForm.controls.authors;
  }

  initAuthor(author: Author): FormGroup {
    const { name, lastName } = author;
    return this.fb.group({
      name: [name, Validators.required],
      lastName: [lastName]
    });
  }

  addAuthor = (author?: Author): void => {
    const authorToAdd = author || {name: 'Name', lastName: 'Surname'};
    const newAuthor = this.initAuthor(authorToAdd);
    const formAuthors = <FormArray>this.addCourseForm.controls.authors;
    formAuthors.push(newAuthor);
  }

  removeAuthor(authorNum: number): void {
    const formAuthors = <FormArray>this.addCourseForm.controls.authors;
    if (formAuthors.length === 1) {
      return;
    }
    formAuthors.removeAt(authorNum);
  }

  toggleEdit(event): void {
    if (event.target.tagName === 'BUTTON') {
      return;
    }
    this.openEditor = !this.openEditor;
  }

  ngOnInit(): void {
    if (this.isEditCourse) {
      this.id = parseInt(this.activeRoute.snapshot.params.id, 10);
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
    this.courseSubs.unsubscribe();
  }

  onSave(): void {
    if (!this.addCourseForm.valid) {
      return;
    }
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
    if (confirm('Do you want to cancel editing?')) {
      this.router.navigate(['..']);
    }
  }
}
