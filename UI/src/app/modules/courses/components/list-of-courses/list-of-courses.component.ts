import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from 'src/app/modules/shared/models/course';
import { Observable, Subscription, Subject } from 'rxjs';
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
  private timeToWait = 1500;
  private charLengthToSearch = 3;
  public courses: Observable<Course[]>;
  private subject = new Subject<string>();
  private subs: Subscription;

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
    this.subs = this.subject.pipe(
      filter((value: string) => value.length % this.charLengthToSearch === 0),
      debounceTime(this.timeToWait),
    )
    .subscribe((searchText: string) => {
      this.store.dispatch(loadSortedCourses({searchText}));
    }, console.error);
  }

  inputChange(textToSearch: string): void {
    this.subject.next(textToSearch);
  }

  loadCourses(): void {
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
