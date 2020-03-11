import { Course } from '../../shared/models/course';

export interface CoursesState {
  courses: Course[];
  isLoading: boolean;
}
