import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { Course } from '../../models/course';

@Directive({
  selector: '[appFreshCourse]'
})

export class FreshCourseDirective implements OnChanges {
  @Input('appFreshCourse') public course: Course;

  private currentDate = new Date();
  private numericCurrentDate = +this.currentDate;
  private dateToCompare = this.currentDate.setDate(this.currentDate.getDate() - 14);

  constructor(private el: ElementRef) { }

  ngOnChanges() {
    if(this.course.creationDate < this.numericCurrentDate && this.course.creationDate >= this.dateToCompare) {
      this.el.nativeElement.style.borderColor = 'green';
    } else if (this.course.creationDate > this.numericCurrentDate) {
      this.el.nativeElement.style.borderColor = 'blue';
    }
  }
}
