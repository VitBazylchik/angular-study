import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LoadEditCourseEffects } from './load-edit-course.effects';

describe('LoadEditCourseEffects', () => {
  let actions$: Observable<any>;
  let effects: LoadEditCourseEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadEditCourseEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<LoadEditCourseEffects>(LoadEditCourseEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
