import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { FindPipe } from 'src/app/modules/shared/pipes/find/find.pipe';
import { CoursesService } from '../../service/courses.service';

@Component({
  selector: 'app-list-of-courses',
  templateUrl: './list-of-courses.component.html',
  styleUrls: ['./list-of-courses.component.scss']
})
export class ListOfCoursesComponent implements OnInit {
  constructor(private coursesService: CoursesService) { }
  public courses: Course[];
  private findPipe = new FindPipe();

  ngOnInit(): void {
    this.courses = this.coursesService.getList();
  }

  findCourses(searchText: string): void {
    this.courses = this.findPipe.transform(this.courses, searchText);
  }

  deleteCourse(id: number): void {
    const confirmMsg = 'Do you really want do delete this course?';
    this.courses = confirm(confirmMsg) ? this.coursesService.removeItem(id) : this.courses;
  }
}
