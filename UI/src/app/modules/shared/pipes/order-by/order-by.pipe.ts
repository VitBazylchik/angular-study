import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../models/course';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Course[]): Course[] {
    return value.sort((first: Course, second: Course) => {
      const secondDate = +new Date(second.date);
      const firstDate = +new Date(first.date);
      return secondDate - firstDate;
    });
  }

}
