import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadCourses, loadCoursesSuccess, isLoading, loadSortedCourses } from '../../courses.actions';
import { tap, map } from 'rxjs/operators';
import { CoursesService } from '../../../service/courses.service';
import { Course } from 'src/app/modules/shared/models/course';
import { Store, select } from '@ngrx/store';

@Injectable()
export class LoadCoursesEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private store: Store,
  ) {}

  loadEffect$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(loadSortedCourses, loadCourses),
        tap((props: {type: string, searchText?: string}) => {
          this.coursesService.getList(props.searchText).subscribe((courses: Course[]) => {
            this.store.dispatch(loadCoursesSuccess({courses}));
          });
        }),
        map(isLoading)
      );
  });
}
