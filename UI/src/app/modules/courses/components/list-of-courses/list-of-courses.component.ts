import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../service/courses.service';
import { Course } from 'src/app/modules/shared/models/course';
import { Observable, concat } from 'rxjs';

@Component({
  selector: 'app-list-of-courses',
  templateUrl: './list-of-courses.component.html',
  styleUrls: ['./list-of-courses.component.scss']
})
export class ListOfCoursesComponent implements OnInit {
  constructor(private coursesService: CoursesService) { }
  public courses: Observable<Course[]>;

  ngOnInit(): void {
    this.courses = this.coursesService.getList();
  }

  findCourses(searchText: string): void {
    if (!searchText) {
      this.coursesService.textFragment = null;
    }
    this.courses = this.coursesService.getList(searchText);
  }

  loadMore(): void {
    const numOfNewCourses = 3;
    this.coursesService.count += numOfNewCourses;
    this.courses = this.coursesService.getList();
  }

  deleteCourse(id: number): void {
    const confirmMsg = 'Do you really want do delete this course?';
    if (confirm(confirmMsg)) {
      this.coursesService.removeItem(id);
      this.courses = this.coursesService.getList();
    }
  }
}
