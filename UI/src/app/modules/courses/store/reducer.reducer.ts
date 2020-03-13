import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from '../models/courses-state';
import { isLoading, loadCoursesSuccess, loadCourseToEditSuccess } from './courses.actions';

export const coursesFeatureKey = 'courses';

export const initialState: CoursesState = {
  courses: null,
  isLoading: false,
  currentCourse: null,
};

export const selectState = createFeatureSelector(coursesFeatureKey);

const reducer = createReducer(
  initialState,
  on(isLoading, (state: CoursesState) => ({...state, isLoading: true})),
  on(loadCoursesSuccess, (state: CoursesState, {courses}) => ({
    ...state,
    courses,
    isLoading: false,
  })),
  on(loadCourseToEditSuccess, (state: CoursesState, {course}) => ({
    ...state,
    currentCourse: course,
    isLoading: false,
  })),
);

export function coursesReducer(state: CoursesState | undefined, action: Action) {
  return reducer(state, action);
}
