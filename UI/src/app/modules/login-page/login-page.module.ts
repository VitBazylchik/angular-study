import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
// import * as fromLoginPage from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { LogoutEffects } from './store/effects/logout/logout.effects';
import { loginPageFeatureKey, reducer } from './store/login-page.reducer';
import { LoginEffects } from './store/effects/login/login.effects';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    SharedModule,
    RouterModule,
    StoreModule.forFeature(loginPageFeatureKey, reducer),
    EffectsModule.forFeature([LogoutEffects, LoginEffects])
  ],
  exports: [
    LoginPageComponent,
  ]
})
export class LoginPageModule { }
