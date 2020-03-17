import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { loggedOut, loggedIn } from './login-page.actions';
import { Ilogin } from './login-state';

export const loginPageFeatureKey = 'loginPage';

export const initialState: Ilogin = {
  isAuthenticated: false,
  currentUser: null,
};

export const selectPageState = createFeatureSelector<Ilogin>(loginPageFeatureKey);

export const selectAuth = createSelector(
  selectPageState,
  (state: Ilogin) => state.isAuthenticated
);

export const selectUser = createSelector(
  selectPageState,
  (state: Ilogin) => state.currentUser
);

const loginPageReducer = createReducer(
  initialState,
  on(loggedOut, (state: Ilogin) => ({
    ...state,
    isAuthenticated: false,
    currentUser: null,
  })),
  on(loggedIn, (state: Ilogin, { currentUser }: { currentUser: string}) => ({
    ...state,
    isAuthenticated: true,
    currentUser,
  }))
);

export function reducer(state: Ilogin | undefined, action: Action) {
  return loginPageReducer(state, action);
}
