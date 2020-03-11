import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap, filter } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';
import { User } from '../../shared/models/user';
import { Store, select } from '@ngrx/store';
import { Ilogin } from '../store/login-state';
import { loggedIn } from '../store/login-page.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private store: Store<{loginPage: Ilogin}>,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url = this.router.parseUrl('/login');
    const check$ = this.authService.getUserInfo().pipe(
      map((user: User) => {
        if (user) {
          const props = {
            currentUser: `${user.name.first} ${user.name.last}`
          }
          this.store.dispatch(loggedIn(props));
        }
        return !!user;
      })
    );
    return this.store.pipe(
      select(state => state.loginPage.isAuthenticated),
      switchMap(() => check$),
      filter((value) => value),
      map((value) => value || url),
      catchError(() => of(url))
    );
  }
}
