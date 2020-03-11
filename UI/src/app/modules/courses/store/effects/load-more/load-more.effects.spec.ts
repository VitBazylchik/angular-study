import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LoadMoreEffects } from './load-more.effects';

describe('LoadMoreEffects', () => {
  let actions$: Observable<any>;
  let effects: LoadMoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadMoreEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<LoadMoreEffects>(LoadMoreEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
