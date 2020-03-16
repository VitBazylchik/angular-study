import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { CoursesService } from '../../../service/courses.service';
import { editCourse } from '../../courses.actions';
import { tap } from 'rxjs/operators';
import { Course } from 'src/app/modules/shared/models/course';

@Injectable()
export class EditCourseEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private router: Router,
  ) {}

  addCourse$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(editCourse),
        tap((item: Course) => {
          this.coursesService.updateItem(item).subscribe(() => this.router.navigate(['..']), console.error);
        }));
  }, {dispatch: false});
}
