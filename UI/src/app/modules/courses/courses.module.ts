import { NgModule } from '@angular/core';
import { CourseComponent } from './components/course/course.component';
import { ListOfCoursesComponent } from './components/list-of-courses/list-of-courses.component';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from '../shared/shared.module';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { routing } from './courses.routing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/interceptors/auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { coursesFeatureKey, coursesReducer } from './store/reducer.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoadCoursesEffects } from './store/effects/load-courses/load-courses.effects';
import { DeleteCourseEffects } from './store/effects/delete-course/delete-course.effects';
import { LoadMoreEffects } from './store/effects/load-more/load-more.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorsListComponent } from './components/authors-list/authors-list.component';
import { LoadEditCourseEffects } from './store/effects/load-edit-course/load-edit-course.effects';
import { AddCourseEffects } from './store/effects/add-course/add-course.effects';
import { EditCourseEffects } from './store/effects/edit-course/edit-course.effects';

@NgModule({
  declarations: [
    CourseComponent,
    ListOfCoursesComponent,
    SearchComponent,
    AddCourseComponent,
    AuthorsListComponent,
  ],
  imports: [
    SharedModule,
    routing,
    StoreModule.forFeature(coursesFeatureKey, coursesReducer),
    EffectsModule.forFeature([LoadCoursesEffects, DeleteCourseEffects, LoadMoreEffects, LoadEditCourseEffects, AddCourseEffects, EditCourseEffects]),
  ],
  exports: [ListOfCoursesComponent, AddCourseComponent],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]
})
export class CoursesModule { }
