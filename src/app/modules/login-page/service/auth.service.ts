import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  public isAuthenticated = false;
  public fakeUserInfo: User = {
    id: 1,
    firstName: 'Vitalia',
    lastName: 'Bazylchyk',
  }
  
  public login() {
    const fakeToken = 'sdgsdhgdfhdh';

    localStorage.setItem('userInfo', JSON.stringify(this.fakeUserInfo));
    localStorage.setItem('token', fakeToken);
    this.isAuthenticated = true;
    console.log(this.isAuthenticated);
  }

  public logout() {
    localStorage.clear();
    this.isAuthenticated = false;
  }

  public getUserInfo(): User {
    return this.fakeUserInfo;
  }
}
