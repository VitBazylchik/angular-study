import { createSelector } from '@ngrx/store';
import { selectState } from './reducer.reducer';
import { CoursesState } from '../models/courses-state';

export const selectCourses = createSelector(
  selectState,
  (state: CoursesState) => state.courses
);

export const selectLoading = createSelector(
  selectState,
  (state: CoursesState) => state.isLoading
);

export const selectCourse = createSelector(
  selectState,
  (state: CoursesState) => state.currentCourse
);
