import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/login-page/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public authService: AuthService) { }
  public userLogin: string;

  public logOut(): void {
    this.authService.logout();
  }
}
