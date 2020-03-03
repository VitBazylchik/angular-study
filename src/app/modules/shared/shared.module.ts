import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { FindPipe } from './pipes/find/find.pipe';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { FreshCourseDirective } from './directives/fresh-course/fresh-course.directive';
import { LogoComponent } from './components/logo/logo.component';
import { LogButtonComponent } from './components/log-button/log-button.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumpsComponent } from './components/breadcrumps/breadcrumps.component';

const NgModules = [
  CommonModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  FormsModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
];

const declarations = [
  DurationPipe,
  FindPipe,
  OrderByPipe,
  FreshCourseDirective,
  LogoComponent,
  LogButtonComponent,
  HeaderComponent,
  FooterComponent,
  BreadcrumpsComponent,
]

@NgModule({
  imports: [...NgModules],
  declarations: [
    ...declarations
  ],
  exports: [
    ...NgModules,
    ...declarations,
  ]
})
export class SharedModule { }
