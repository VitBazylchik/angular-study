import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    LoginPageComponent,
  ]
})
export class LoginPageModule { }
