import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CoursesService } from '../../../service/courses.service';
import { tap, map } from 'rxjs/operators';
import { loadCourseToEdit, loadCourseToEditSuccess, isLoading } from '../../courses.actions';
import { Course } from 'src/app/modules/shared/models/course';

@Injectable()
export class LoadEditCourseEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private coursesService: CoursesService,
  ) {}

  loadCourseEffect$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(loadCourseToEdit),
        tap((props: {type: string, id: number}) => {
          this.coursesService.getItemById(props.id).subscribe((course: Course) => {
            this.store.dispatch(loadCourseToEditSuccess({course}));
          });
        }),
        map(isLoading)
      );
  });
}
