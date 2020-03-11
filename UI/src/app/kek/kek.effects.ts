import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as KekActions from './kek.actions';



@Injectable()
export class KekEffects {

  loadKeks$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(KekActions.loadKeks),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => KekActions.loadKeksSuccess({ data })),
          catchError(error => of(KekActions.loadKeksFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
