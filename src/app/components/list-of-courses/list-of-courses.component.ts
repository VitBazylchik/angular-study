import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-list-of-courses',
  templateUrl: './list-of-courses.component.html',
  styleUrls: ['./list-of-courses.component.scss']
})
export class ListOfCoursesComponent implements OnInit {
  courses: Course[] = [
    {
      id: 1,
      title: "Title 1",
      creationDate: Date.now() - 100,
      duration: 100,
      description: "BLALBLALBA",
      topRated: false,
    },
    {
      id: 2,
      title: "Title 2",
      creationDate: Date.now() - 10**10,
      duration: 120,
      description: "BLALBLALBgsdgfdgdfhfghA",
      topRated: true,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  deleteCourse(id: number): void {
    this.courses = this.courses.filter((course) => course.id !== id);
  }
}
