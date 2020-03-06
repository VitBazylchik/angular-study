import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { Course } from '../../models/course';

@Directive({
  selector: '[appFreshCourse]'
})

export class FreshCourseDirective implements OnChanges {
  @Input('appFreshCourse') public course: Course;

  private currentDate = new Date();
  private numericCurrentDate = +new Date();
  private twoWeeks = 14;
  private dateToCompare = this.currentDate.setDate(this.currentDate.getDate() - this.twoWeeks);

  constructor(private el: ElementRef) { }

  ngOnChanges(): void {
    const numericCourseDate = +this.course.date;
    if (numericCourseDate < this.numericCurrentDate && numericCourseDate >= this.dateToCompare) {
      this.el.nativeElement.style.borderColor = 'green';
    } else if (numericCourseDate > this.numericCurrentDate) {
      this.el.nativeElement.style.borderColor = 'blue';
    }
  }
}
