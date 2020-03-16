import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadMoreCourses, loadCourses } from '../../courses.actions';
import { map } from 'rxjs/operators';
import { CoursesService } from '../../../service/courses.service';



@Injectable()
export class LoadMoreEffects {
  constructor(private actions$: Actions, private coursesService: CoursesService) {}
  loadMore$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(loadMoreCourses),
        map(() => {
          this.coursesService.incrementCoursesCount();
          return loadCourses();
        }));
  });
}
