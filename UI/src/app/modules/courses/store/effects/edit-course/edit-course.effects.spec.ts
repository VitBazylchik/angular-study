import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EditCourseEffects } from './edit-course.effects';

describe('EditCourseEffects', () => {
  let actions$: Observable<any>;
  let effects: EditCourseEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EditCourseEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<EditCourseEffects>(EditCourseEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
