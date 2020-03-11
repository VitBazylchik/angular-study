import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from '../models/courses-state';
import { isLoading, loadCoursesSuccess } from './courses.actions';

export const coursesFeatureKey = 'courses';

export const initialState: CoursesState = {
  courses: null,
  isLoading: false,
};

export const selectState = createFeatureSelector(coursesFeatureKey);

export const selectCourses = createSelector(
  selectState,
  (state: CoursesState) => state.courses
);

export const selectLoading = createSelector(
  selectState,
  (state: CoursesState) => state.isLoading
);

const reducer = createReducer(
  initialState,
  on(isLoading, (state: CoursesState) => ({...state, isLoading: true})),
  on(loadCoursesSuccess, (state: CoursesState, {courses}) => ({
    ...state,
    courses,
    isLoading: false,
  })),
);

export function coursesReducer(state: CoursesState | undefined, action: Action) {
  return reducer(state, action);
}
