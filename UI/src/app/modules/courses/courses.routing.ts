import { Routes, RouterModule } from '@angular/router';
import { ListOfCoursesComponent } from './components/list-of-courses/list-of-courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AuthGuard } from '../login-page/guards/auth.guard';

const routes: Routes = [
  {path: 'courses', component: ListOfCoursesComponent},
  {path: 'new', component: AddCourseComponent, data: {edit: false}},
  {path: 'edit/:id', component: AddCourseComponent, data: {edit: true}},
];

export const routing = RouterModule.forChild(routes);
