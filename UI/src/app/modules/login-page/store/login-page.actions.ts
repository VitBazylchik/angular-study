import { createAction, props } from '@ngrx/store';

export const loginAction = createAction(
  '[LoginPage] login',
  props<{ login: string, password: string }>()
);

export const loggedIn = createAction(
  '[LoginPage] loggedIn',
  props<{ currentUser: string }>()
);

export const logout = createAction(
  '[LoginPage] logout'
);

export const loggedOut = createAction(
  '[LoginPage] loggedOut'
);

export const checkUser = createAction(
  '[LoginPage] checkUser'
);