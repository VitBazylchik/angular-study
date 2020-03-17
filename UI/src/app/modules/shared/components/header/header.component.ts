import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/login-page/service/auth.service';
import { Store, select } from '@ngrx/store';
import { logout } from 'src/app/modules/login-page/store/login-page.actions';
import { selectUser, selectAuth } from 'src/app/modules/login-page/store/login-page.reducer';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private store: Store, public authService: AuthService, public translate: TranslateService) {}
  public userInfo$ = this.store.pipe(select(selectUser));
  public isAuthenticated$ = this.store.pipe(select(selectAuth));
  public logOut(): void {
    this.store.dispatch(logout());
  }
  public changeLanguage(value: string): void {
    this.translate.use(value);
  }
}
