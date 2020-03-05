import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../service/courses.service';
import { Course } from 'src/app/models/course';

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
  public date: string | number = '';
  public duration: string | number = '';
  public authors = '';
  public id: number;
  public currentCourse: Course;

  ngOnInit(): void {
    if (this.isEditCourse) {
      this.id = +this.activeRoute.snapshot.params.id;
      this.currentCourse = this.coursesService.getItemById(this.id);
      this.title = this.currentCourse.title;
      this.description = this.currentCourse.description;
      this.date = this.currentCourse.creationDate;
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
      this.authors = value;
    }
  }
  public changeDuration(value: string): void {
    if (typeof value === 'string') {
      this.duration = value;
    }
  }
  public onSave(): void {
    const creationDate = +new Date(this.date);
    const duration = +this.duration;
    this.id
      ? this.coursesService.updateItem(this.id, this.title, this.description, creationDate, duration)
      : this.coursesService.createItem(this.title, this.description, creationDate, duration);
    this.router.navigate(['..']);
  }
  public onCancel(): void {
    if (confirm('Do you want to cancel editing?')) {
      this.router.navigate(['..']);
    }
  }
}
