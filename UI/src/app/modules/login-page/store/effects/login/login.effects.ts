import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { loginAction, loggedIn } from '../../login-page.actions';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/shared/models/user';
import { Store } from '@ngrx/store';

interface LoginProps {
  type: string;
  login: string;
  password: string;
}

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store,
  ) {}
  logoutEffect$ = createEffect(() => this.actions$.pipe(
    ofType(loginAction),
    tap((props: LoginProps) => {
      const { login, password }: LoginProps = props;
      this.authService.login(login, password)
        .subscribe((data: {token: string}) => {
          localStorage.setItem('token', data.token);
          this.authService.getUserInfo().subscribe((user: User) => {
            const nextProps = {currentUser: `${user.name.first} ${user.name.last}`};
            this.store.dispatch(loggedIn(nextProps));
            this.router.navigateByUrl('courses');
          });
        });
    }),
  ), {dispatch: false});
}
