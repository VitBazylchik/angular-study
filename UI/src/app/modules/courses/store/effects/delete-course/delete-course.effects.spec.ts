import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DeleteCourseEffects } from './delete-course.effects';

describe('DeleteCourseEffects', () => {
  let actions$: Observable<any>;
  let effects: DeleteCourseEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DeleteCourseEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<DeleteCourseEffects>(DeleteCourseEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
