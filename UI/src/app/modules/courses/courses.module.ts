import { NgModule } from '@angular/core';
import { CourseComponent } from './components/course/course.component';
import { ListOfCoursesComponent } from './components/list-of-courses/list-of-courses.component';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from '../shared/shared.module';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { routing } from './courses.routing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/interceptors/auth.interceptor';

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
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]
})
export class CoursesModule { }
