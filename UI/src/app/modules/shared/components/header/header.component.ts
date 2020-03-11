import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/login-page/service/auth.service';
import { Store, select } from '@ngrx/store';
import { Ilogin } from 'src/app/modules/login-page/store/login-state';
import { logout } from 'src/app/modules/login-page/store/login-page.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private store: Store<{loginPage: Ilogin}>, public authService: AuthService) {}
  public userInfo$ = this.store.pipe(select(state => state.loginPage.currentUser));
  public isAuthenticated$ = this.store.pipe(select(state => state.loginPage.isAuthenticated));
  public logOut(): void {
    this.store.dispatch(logout());
  }
}
