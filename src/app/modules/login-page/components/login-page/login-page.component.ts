import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public email: string;
  public password: string;

  ngOnInit(): void {
  }

  public onLogin(): void {
    this.authService.login();
    console.log('Log in successfully')
  }

}
