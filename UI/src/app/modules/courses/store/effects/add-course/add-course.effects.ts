import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addCourse } from '../../courses.actions';
import { tap } from 'rxjs/operators';
import { CoursesService } from '../../../service/courses.service';
import { Router } from '@angular/router';
import { Course } from 'src/app/modules/shared/models/course';

@Injectable()
export class AddCourseEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private router: Router,
  ) {}

  addCourse$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(addCourse),
        tap((item: Course) => {
          this.coursesService.createItem(item).subscribe(() => this.router.navigate(['..']), console.error);
        }));
  }, {dispatch: false});
}
