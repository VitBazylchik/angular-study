import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { removeCourse, isLoading, loadCourses } from '../../courses.actions';
import { tap, map } from 'rxjs/operators';
import { CoursesService } from '../../../service/courses.service';



@Injectable()
export class DeleteCourseEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private coursesService: CoursesService
  ) {}

  deleteEffect$ = createEffect(() => this.actions$.pipe(
      ofType(removeCourse),
      tap(({id}) => {
        this.coursesService.removeItem(id).subscribe(() => {
          this.store.dispatch(loadCourses());
        });
      }),
      map(isLoading)
    )
  );
}
