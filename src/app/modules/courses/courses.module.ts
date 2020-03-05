import { NgModule } from '@angular/core';
import { CourseComponent } from './components/course/course.component';
import { ListOfCoursesComponent } from './components/list-of-courses/list-of-courses.component';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from '../shared/shared.module';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { DateInputComponent } from './components/date-input/date-input.component';
import { DurationInputComponent } from './components/duration-input/duration-input.component';
import { AuthorsInputComponent } from './components/authors-input/authors-input.component';
import { routing } from './courses.routing';

@NgModule({
  declarations: [
    CourseComponent,
    ListOfCoursesComponent,
    SearchComponent,
    AddCourseComponent,
    DateInputComponent,
    DurationInputComponent,
    AuthorsInputComponent,
  ],
  imports: [SharedModule, routing],
  exports: [],
})
export class CoursesModule { }
