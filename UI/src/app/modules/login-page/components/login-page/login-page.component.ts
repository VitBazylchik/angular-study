import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Ilogin } from '../../store/login-state';
import { login } from '../../store/login-page.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  constructor(private store: Store<{loginPage: Ilogin}>) { }
  public email: string;
  public password: string;

  public emailChange(value: string): void {
    this.email = value;
  }
  public passwordChange(value: string): void {
    this.password = value;
  }

  public onLogin(): void {
    const props = {
      login: this.email,
      password: this.password
    };
    this.store.dispatch(login(props));
  }
}
