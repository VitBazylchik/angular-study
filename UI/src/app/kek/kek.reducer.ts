import { Action, createReducer, on } from '@ngrx/store';
import * as KekActions from './kek.actions';

export const kekFeatureKey = 'kek';

export interface State {

}

export const initialState: State = {

};

const kekReducer = createReducer(
  initialState,

  on(KekActions.loadKeks, state => state),
  on(KekActions.loadKeksSuccess, (state, action) => state),
  on(KekActions.loadKeksFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return kekReducer(state, action);
}
