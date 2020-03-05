import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './modules/login-page/components/login-page/login-page.component';
import { MissingPageComponent } from './modules/shared/components/missing-page/missing-page.component';

const routes: Routes = [
  {path: 'courses', loadChildren: './modules/courses/courses.module#CoursesModule'},
  {path: 'login', component: LoginPageComponent},
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: '**', component: MissingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
