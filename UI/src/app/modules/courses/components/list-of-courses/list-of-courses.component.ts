import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from '../../service/courses.service';
import { Course } from 'src/app/modules/shared/models/course';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';
import { BlockService } from 'src/app/modules/shared/services/block.service';

@Component({
  selector: 'app-list-of-courses',
  templateUrl: './list-of-courses.component.html',
  styleUrls: ['./list-of-courses.component.scss']
})
export class ListOfCoursesComponent implements OnInit, OnDestroy {
  constructor(private coursesService: CoursesService, private blockService: BlockService) { }
  private inputText: string;
  private subs: Subscription;
  public courses: Observable<Course[]>;
  private obs = new Observable((subscriber: Subscriber<string>): void => {
    subscriber.next(this.inputText);
  });

  ngOnInit(): void {
    this.courses = this.coursesService.getList();
  }

  inputChange(searchText: string): void {
    const charLength = 3;
    const debTime = 1500;
    this.inputText = searchText;
    this.subs = this.obs
      .pipe(
        filter((value: string) => value.length % charLength === 0),
        debounceTime(debTime),
      )
      .subscribe((text: string) => {
        this.courses = this.coursesService.getList(text);
      }, console.error);
  }

  loadMore(): void {
    const numOfNewCourses = 3;
    this.coursesService.count += numOfNewCourses;
    this.courses = this.coursesService.getList();
  }

  deleteCourse(id: number): void {
    const confirmMsg = 'Do you really want do delete this course?';
    if (confirm(confirmMsg)) {
      this.coursesService
        .removeItem(id)
        .subscribe(() => {
          this.courses = this.coursesService.getList();
        });
    }
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
