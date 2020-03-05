import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/models/course';

@Pipe({
  name: 'find'
})
export class FindPipe implements PipeTransform {

  transform(courses: Course[], searchText: string): Course[] {
    return courses.filter((course: Course) => {
      const lowSearchText = searchText.trim().toLowerCase();
      const courseLowTitle = course.title.toLowerCase();
      return courseLowTitle.indexOf(lowSearchText) === 0;
    });
  }

}
