import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Course } from 'src/app/models/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {
  @Input() public course: Course;
  @Output() public delete: EventEmitter<number> = new EventEmitter<number>();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.delete.emit(this.course.id);
  }

  onEdit() {
    this.router.navigate(['/courses/edit', this.course.id]);
  }
}
