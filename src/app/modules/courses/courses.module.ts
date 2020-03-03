import { NgModule } from '@angular/core';
import { CourseComponent } from './components/course/course.component';
import { ListOfCoursesComponent } from './components/list-of-courses/list-of-courses.component';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CourseComponent,
    ListOfCoursesComponent,
    SearchComponent,
  ],
  imports: [SharedModule],
  exports: [
    ListOfCoursesComponent,
  ],
})
export class CoursesModule { }
