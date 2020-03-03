import { Component, OnInit, Pipe } from '@angular/core';
import { Course } from 'src/app/models/course';
import { FindPipe } from 'src/app/pipes/find/find.pipe';

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
      duration: 59,
      description: "BLALBLALBA",
      topRated: false,
    },
    {
      id: 2,
      title: "Title 2",
      creationDate: Date.now() - 10**11,
      duration: 122,
      description: "BLALBLALBgsdgfdgdfhfghA",
      topRated: true,
    },
    {
      id: 3,
      title: "ETitle 3",
      creationDate: Date.now() - 10**10,
      duration: 96,
      description: "BLALBLALBgsdgfdgdfhfghA",
      topRated: false,
    }
  ]

  constructor() { }

  private findPipe = new FindPipe();

  ngOnInit(): void {
  }

  findCourses(searchText: string) {
    this.courses = this.findPipe.transform(this.courses, searchText);
  }

  deleteCourse(id: number): void {
    this.courses = this.courses.filter((course: Course) => course.id !== id);
  }
}
