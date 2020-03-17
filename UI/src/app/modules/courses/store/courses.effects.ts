import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap, switchMap } from 'rxjs/operators';
import { CoursesService } from '../service/courses.service';
import { Course } from '../../shared/models/course';
import {
  loadMoreCourses,
  loadCourses,
  loadCourseToEdit,
  loadCourseToEditSuccess,
  isLoading,
  loadSortedCourses,
  loadCoursesSuccess,
  editCourse,
  removeCourse,
  addCourse
} from './courses.actions';
import { Router } from '@angular/router';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private coursesService: CoursesService,
  ) {}

  loadingEffect$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(loadCourseToEdit, loadCourses, loadSortedCourses, removeCourse, editCourse, loadMoreCourses),
        map(isLoading));
  });

  loadCoursesEffect$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(loadSortedCourses, loadCourses),
        switchMap((props: {type: string, searchText?: string}) => this.coursesService.getList(props.searchText)),
        map((courses: Course[]) => loadCoursesSuccess({courses}))
      );
  });

  loadMoreCourses$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(loadMoreCourses),
        map(() => {
          this.coursesService.incrementCoursesCount();
          return loadCourses();
        }));
  });

  loadCourseByIdEffect$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(loadCourseToEdit),
        switchMap(({id}: {id: number}) => this.coursesService.getItemById(id)),
        map((course: Course) => loadCourseToEditSuccess({course}))
      );
  });

  editCourseEffect$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(editCourse),
        switchMap((item: Course) => this.coursesService.updateItem(item)),
        tap(() => this.router.navigate(['..']))
      );
  }, {dispatch: false});

  deleteCourseEffect$ = createEffect(() => this.actions$.pipe(
      ofType(removeCourse),
      switchMap(({id}: {id: number}) => this.coursesService.removeItem(id)),
      map(loadCourses)
    )
  );

  addCourseEffect$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(addCourse),
        switchMap((item: Course) => this.coursesService.createItem(item)),
        tap(() => this.router.navigate(['..']))
      );
  }, {dispatch: false});
}
