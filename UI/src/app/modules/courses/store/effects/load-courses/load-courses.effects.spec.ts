import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LoadCoursesEffects } from './load-courses.effects';

describe('LoadCoursesEffects', () => {
  let actions$: Observable<any>;
  let effects: LoadCoursesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadCoursesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<LoadCoursesEffects>(LoadCoursesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
