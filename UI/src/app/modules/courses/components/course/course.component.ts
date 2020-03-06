import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/modules/shared/models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent {
  @Input() public course: Course;
  @Output() public delete: EventEmitter<number> = new EventEmitter<number>();
  constructor(private router: Router) {}

  onDelete(): void {
    this.delete.emit(this.course.id);
  }

  onEdit(): void {
    this.router.navigate(['/courses/edit', this.course.id]);
  }
}
