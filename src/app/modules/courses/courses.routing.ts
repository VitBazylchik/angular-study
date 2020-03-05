import { Routes, RouterModule } from '@angular/router';
import { ListOfCoursesComponent } from './components/list-of-courses/list-of-courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';

const routes: Routes = [
  {path: 'courses', component: ListOfCoursesComponent},
  {path: 'courses/new', component: AddCourseComponent, data: {add: true}},
  {path: 'courses/edit/:id', component: AddCourseComponent, data: {add: false}},
]

export const routing = RouterModule.forChild(routes);