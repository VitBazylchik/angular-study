import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {

  constructor(private authService: AuthService) { }
  public email: string;
  public password: string;

  public emailChange(value: string): void {
    this.email = value;
  }
  public passwordChange(value: string): void {
    this.password = value;
  }

  public onLogin(): void {
    this.authService.login(this.email, this.password);
  }
}
