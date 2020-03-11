import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map } from 'rxjs/operators';
import { login, loggedIn, stayIn } from '../../login-page.actions';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/shared/models/user';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store,
  ) {}
  logoutEffect$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    tap((props) => {
      const { login, password } = props;
      this.authService.login(login, password)
        .subscribe((data: {token: string}) => {
          if (data) {
            localStorage.setItem('token', data.token);
            this.authService.getUserInfo().subscribe((user: User) => {
              const props = {currentUser: `${user.name.first} ${user.name.last}`};
              this.store.dispatch(loggedIn(props));
              this.router.navigateByUrl('courses');
            });
          }
        });
    }),
    map(stayIn)
  ));
}
