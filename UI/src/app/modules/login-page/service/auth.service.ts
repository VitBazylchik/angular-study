import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
  ) { }
  private BASE_URL = 'http://localhost:3004';

  public login(login: string, password: string): Observable<Token> {
    const body = {
      login,
      password,
    };
    return this.http.post<Token>(`${this.BASE_URL}/auth/login`, body);
  }

  public getUserInfo(): Observable<User> {
    const token = localStorage.getItem('token');
    const body = {token};
    return this.http.post<User>(`${this.BASE_URL}/auth/userinfo`, body);
  }
}
