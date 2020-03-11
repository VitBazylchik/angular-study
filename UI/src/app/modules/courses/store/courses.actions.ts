import { createAction, props } from '@ngrx/store';
import { Course } from '../../shared/models/course';

export const loadCourses = createAction(
  '[Courses] loadCourses'
);

export const loadSortedCourses = createAction(
  '[Courses] loadSortedCourses',
  props<{ searchText: string }>()
);

export const loadCoursesSuccess = createAction(
  '[Courses] Load Courses Success',
  props<{ courses: Course[] }>()
);

export const removeCourse = createAction(
  '[Courses] removeCourse',
  props<{id: number}>()
);

export const loadMoreCourses = createAction(
  '[Courses] load more courses'
);

export const isLoading = createAction(
  '[Courses] is loading'
);
