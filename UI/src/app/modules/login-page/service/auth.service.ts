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

  public login(login: string, password: string): void {
    const body = {
      login,
      password,
    };
    this.http.post<{token: string}>(`${this.BASE_URL}/auth/login`, body).subscribe((data: {token: string}) => {
      if (data) {
        localStorage.setItem('token', data.token);
        this.isAuthenticated = true;
        this.router.navigateByUrl('courses');
      }
    });
  }

  public logout(): void {
    localStorage.clear();
    this.isAuthenticated = false;
    this.currentUser = null;
    this.router.navigateByUrl('login');
  }

  public getUserInfo(): Observable<User | string> {
    const token = localStorage.getItem('token');
    const body = {token};
    return this.http.post<User>(`${this.BASE_URL}/auth/userinfo`, body);
  }
}
