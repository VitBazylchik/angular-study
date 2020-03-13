import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AddCourseEffects } from './add-course.effects';

describe('AddCourseEffects', () => {
  let actions$: Observable<any>;
  let effects: AddCourseEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AddCourseEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<AddCourseEffects>(AddCourseEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
