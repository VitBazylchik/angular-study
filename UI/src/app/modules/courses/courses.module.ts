import { NgModule } from '@angular/core';
import { CourseComponent } from './components/course/course.component';
import { ListOfCoursesComponent } from './components/list-of-courses/list-of-courses.component';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from '../shared/shared.module';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { routing } from './courses.routing';

@NgModule({
  declarations: [
    CourseComponent,
    ListOfCoursesComponent,
    SearchComponent,
    AddCourseComponent,
  ],
  imports: [
    SharedModule,
    routing
  ],
  exports: [ListOfCoursesComponent, AddCourseComponent],
})
export class CoursesModule { }
