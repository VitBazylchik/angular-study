import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../service/courses.service';
import { Author } from 'src/app/modules/shared/models/author';
import { Course } from 'src/app/modules/shared/models/course';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService
  ) {}

  public isEditCourse = this.activeRoute.snapshot.data.edit;
  public title = '';
  public description = '';
  public date = '';
  public duration: string | number = '';
  public authors: Author[];
  public id: number;
  public currentCourse: Course;

  ngOnInit(): void {
    if (this.isEditCourse) {
      this.id = +this.activeRoute.snapshot.params.id;
      this.currentCourse = this.coursesService.getItemById(this.id);
      this.title = this.currentCourse.name;
      this.description = this.currentCourse.description;
      this.date = this.currentCourse.date;
      this.duration = this.currentCourse.duration;
      this.authors = this.currentCourse.authors;
    }
  }
  public changeDate(value: string): void {
    if (typeof value === 'string') {
      this.date = value;
    }
  }
  public changeAuthors(value: string): void {
    if (typeof value === 'string') {
      this.authors.push({
        name: value,
        lastName: value,
      });
    }
  }
  public changeDuration(value: string): void {
    if (typeof value === 'string') {
      this.duration = value;
    }
  }
  public onSave(): void {
    const date = new Date(this.date).toString();
    const duration = +this.duration;
    this.id
      ? this.coursesService.updateItem(this.id, this.title, this.description, date, duration)
      : this.coursesService.createItem(this.title, this.description, date, duration);
    this.router.navigate(['..']);
  }
  public onCancel(): void {
    if (confirm('Do you want to cancel editing?')) {
      this.router.navigate(['..']);
    }
  }
}
