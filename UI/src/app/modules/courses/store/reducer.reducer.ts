import { Action, createReducer, on, createFeatureSelector } from '@ngrx/store';
import { CoursesState } from '../models/courses-state';
import { isLoading, loadCoursesSuccess, loadCourseToEditSuccess, clearState } from './courses.actions';
import { Course } from '../../shared/models/course';

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
  on(loadCoursesSuccess, (state: CoursesState, {courses}: {courses: Course[]}) => ({
    ...state,
    courses,
    isLoading: false,
  })),
  on(loadCourseToEditSuccess, (state: CoursesState, {course}: {course: Course}) => ({
    ...state,
    currentCourse: course,
    isLoading: false,
  })),
  on(clearState, () => initialState),
);

export function coursesReducer(state: CoursesState | undefined, action: Action): CoursesState {
  return reducer(state, action);
}
