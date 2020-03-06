import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './modules/login-page/components/login-page/login-page.component';
import { MissingPageComponent } from './modules/shared/components/missing-page/missing-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {
    path: 'courses',
    loadChildren: () => import('./modules/courses/courses.module')
    .then((m) => m.CoursesModule)
  },
  {path: '**', component: MissingPageComponent},
];

export const AppRouting = RouterModule.forRoot(routes);
