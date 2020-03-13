import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from 'src/app/modules/shared/models/course';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { selectCourses } from '../../store/selectors';
import { loadCourses, removeCourse, loadMoreCourses, loadSortedCourses } from '../../store/courses.actions';

@Component({
  selector: 'app-list-of-courses',
  templateUrl: './list-of-courses.component.html',
  styleUrls: ['./list-of-courses.component.scss']
})
export class ListOfCoursesComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store
  ) {}
  public courses$ = this.store.pipe(select(selectCourses));

  private inputText: string;
  private subs: Subscription;
  public courses: Observable<Course[]>;
  private obs = new Observable((subscriber: Subscriber<string>): void => {
    subscriber.next(this.inputText);
  });

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
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
      .subscribe((searchText: string) => {
        this.store.dispatch(loadSortedCourses({searchText}));
      }, console.error);
  }

  loadMore(): void {
    this.store.dispatch(loadMoreCourses());
  }

  deleteCourse(id: number): void {
    const confirmMsg = 'Do you really want do delete this course?';
    if (confirm(confirmMsg)) {
      this.store.dispatch(removeCourse({id}));
    }
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}
