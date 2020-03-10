import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuthenticated) {
      return true;
    }
    const url = this.router.parseUrl('/login');
    return this.authService.getUserInfo().pipe(
      map((user: User) => {
        this.authService.isAuthenticated = true;
        this.authService.currentUser = `${user.name.first} ${user.name.last}`;
        return !!user;
      }),
      catchError(() => of(url))
    );
  }
}
