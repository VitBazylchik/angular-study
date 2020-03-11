import { Action, createReducer, on } from '@ngrx/store';
import { loggedOut, loggedIn, stayIn } from './login-page.actions';
import { Ilogin } from './login-state';

export const loginPageFeatureKey = 'loginPage';

export const initialState: Ilogin = {
  isAuthenticated: false,
  currentUser: null,
};

const loginPageReducer = createReducer(
  initialState,
  on(loggedOut, (state: Ilogin) => ({
    ...state,
    isAuthenticated: false,
    currentUser: null,
  })),
  on(loggedIn, (state: Ilogin, { currentUser }) => ({
    ...state,
    isAuthenticated: true,
    currentUser,
  })),
  on(stayIn, (state: Ilogin) => ({...state}))
);

export function reducer(state: Ilogin | undefined, action: Action) {
  return loginPageReducer(state, action);
}
