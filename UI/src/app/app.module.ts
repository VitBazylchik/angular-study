import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { CoursesModule } from './modules/courses/courses.module';
import { LoginPageModule } from './modules/login-page/login-page.module';
import { AppRouting } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    CoursesModule,
    LoginPageModule,
    AppRouting,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
