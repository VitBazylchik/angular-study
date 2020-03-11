import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { logout, loggedOut } from '../../login-page.actions';

@Injectable()
export class LogoutEffects {
  constructor(private actions$: Actions, private router: Router) {}

  logoutEffect$ = createEffect(() => this.actions$.pipe(
      ofType(logout),
      tap(() => {
        localStorage.clear();
        this.router.navigateByUrl('login');
      }),
      map(loggedOut)
    )
  );
}
