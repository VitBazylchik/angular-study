import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { FindPipe } from './pipes/find/find.pipe';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { FreshCourseDirective } from './directives/fresh-course/fresh-course.directive';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MissingPageComponent } from './components/missing-page/missing-page.component';
import { RouterModule } from '@angular/router';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ButtonComponent } from './components/button/button.component';
import { LoadingBlockComponent } from './components/loading-block/loading-block.component';

const NgModules = [
  CommonModule,
  FormsModule,
  MatIconModule,
];

const declarations = [
  DurationPipe,
  FindPipe,
  OrderByPipe,
  FreshCourseDirective,
  LogoComponent,
  HeaderComponent,
  FooterComponent,
  MissingPageComponent,
  TextInputComponent,
  ButtonComponent,
  LoadingBlockComponent,
];

@NgModule({
  imports: [
    ...NgModules,
    RouterModule
  ],
  declarations: [
    ...declarations,
  ],
  exports: [
    ...NgModules,
    ...declarations,
  ]
})
export class SharedModule { }
