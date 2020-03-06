import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }
  private BASE_URL = 'http://localhost:3004';
  public isAuthenticated = false;
  public currentUser: string;

  private getName(): void {
    this.currentUser = ``;
  }

  public login(): void {
    // localStorage.setItem('token', this.fakeToken);
    this.getName();
    this.isAuthenticated = true;
    this.router.navigateByUrl('');
  }

  public logout(): void {
    localStorage.clear();
    this.isAuthenticated = false;
    this.currentUser = null;
    this.router.navigateByUrl('login');
  }

  public getUserInfo(): Observable<User> {
    const token = localStorage.getItem('token');
    return this.http.post<User>(`${this.BASE_URL}/auth/userinfo`, token);
  }
}
