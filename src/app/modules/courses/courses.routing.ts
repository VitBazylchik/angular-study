import { Routes, RouterModule } from '@angular/router';
import { ListOfCoursesComponent } from './components/list-of-courses/list-of-courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';

const routes: Routes = [
  {path: 'courses/edit/:id', component: AddCourseComponent, data: {edit: true}},
  {path: 'courses/new', component: AddCourseComponent, data: {edit: false}},
  {path: 'courses', component: ListOfCoursesComponent},
]

export const routing = RouterModule.forChild(routes);