import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../service/courses.service';
import { Author } from 'src/app/modules/shared/models/author';
import { Course } from 'src/app/modules/shared/models/course';
import * as moment from 'moment';

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
  public name = '';
  public description = '';
  public date = '';
  public length: string | number = '';
  public authors: Author[];
  public id: number;
  public currentCourse: Course;

  ngOnInit(): void {
    if (this.isEditCourse) {
      this.id = +this.activeRoute.snapshot.params.id;
      this.currentCourse = this.coursesService.getItemById(this.id);
      this.name = this.currentCourse.name;
      this.description = this.currentCourse.description;
      this.date = this.currentCourse.date;
      this.length = this.currentCourse.length;
      this.authors = this.currentCourse.authors;
    } else {
      this.date = '03.06.2020';
    }
  }
  public changeName(value: string): void {
    this.name = value;
  }
  public changeDescription(value: string): void {
    this.description = value;
  }
  public changeDate(value: string): void {
    this.date = value;
  }
  public changeAuthors(value: string): void {
      this.authors.push({
        name: value,
        lastName: value,
      });
  }
  public changeDuration(value: string): void {
    this.length = value;
  }
  public onSave(): void {
    const date = new Date(this.date).toString();
    const duration = +this.length;
    this.id
      ? this.coursesService.updateItem(this.id, this.name, this.description, date, duration)
      : this.coursesService.createItem(this.name, this.description, date, duration);
    this.router.navigate(['..']);
  }
  public onCancel(): void {
    if (confirm('Do you want to cancel editing?')) {
      this.router.navigate(['..']);
    }
  }
}
