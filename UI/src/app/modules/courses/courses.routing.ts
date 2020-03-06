import { Routes, RouterModule } from '@angular/router';
import { ListOfCoursesComponent } from './components/list-of-courses/list-of-courses.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AuthGuard } from '../login-page/guards/auth.guard';

const routes: Routes = [
  {path: 'new', component: AddCourseComponent, canActivate: [AuthGuard], data: {edit: false}},
  {path: 'edit/:id', component: AddCourseComponent, canActivate: [AuthGuard], data: {edit: true}},
  {path: 'courses', canActivate: [AuthGuard], component: ListOfCoursesComponent},
];

export const routing = RouterModule.forChild(routes);
