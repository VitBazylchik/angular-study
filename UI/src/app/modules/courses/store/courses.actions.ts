import { createAction, props } from '@ngrx/store';
import { Course } from '../../shared/models/course';
import { Author } from '../../shared/models/author';

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

export const editCourse = createAction(
  '[Courses] editCourse',
  props<{id: number, name: string, description: string, date: string, authors: Author[], length: number}>()
);

export const addCourse = createAction(
  '[Courses] addCourse',
  props<{name: string, description: string, date: string, authors: Author[], length: number}>()
);

export const loadCourseToEdit = createAction(
  '[Courses] loadCourseToEdit',
  props<{id: number}>()
);

export const loadCourseToEditSuccess = createAction(
  '[Courses] loadCourseToEditSuccess',
  props<{ course: Course }>()
);

export const loadMoreCourses = createAction(
  '[Courses] load more courses'
);

export const isLoading = createAction(
  '[Courses] is loading'
);
