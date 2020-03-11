import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user';
import { catchError } from 'rxjs/operators';
import { UserName } from '../../shared/models/user-name';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
  ) { }
  private BASE_URL = 'http://localhost:3004';

  public login(login: string, password: string): Observable<{token: string}> {
    const body = {
      login,
      password,
    };
    return this.http.post<{token: string}>(`${this.BASE_URL}/auth/login`, body);
  }

  public getUserInfo(): Observable<User | string> {
    const token = localStorage.getItem('token');
    const body = {token};
    return this.http.post<User>(`${this.BASE_URL}/auth/userinfo`, body);
  }
}
