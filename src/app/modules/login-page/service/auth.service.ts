import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }
  public isAuthenticated = false;
  public fakeUserInfo: User = {
    id: 1,
    firstName: 'Vitalia',
    lastName: 'Bazylchyk',
  };
  public currentUser: string;
  public fakeToken = 'sdgsdhgdfhdh';

  private getName(): void {
    this.currentUser = `${this.fakeUserInfo.firstName} ${this.fakeUserInfo.lastName}`;
  }

  public login(): void {
    localStorage.setItem('token', this.fakeToken);
    this.getName();
    this.isAuthenticated = true;
    this.router.navigateByUrl('');
  }

  public checkUser(): void {
    if (localStorage.getItem('token')) {
      this.getName();
      this.isAuthenticated = true;
    }
  }

  public logout(): void {
    localStorage.clear();
    this.isAuthenticated = false;
    this.currentUser = null;
    this.router.navigateByUrl('login');
  }

  public getUserInfo(): User {
    return this.fakeUserInfo;
  }
}
