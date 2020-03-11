import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { KekEffects } from './kek.effects';

describe('KekEffects', () => {
  let actions$: Observable<any>;
  let effects: KekEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        KekEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<KekEffects>(KekEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
