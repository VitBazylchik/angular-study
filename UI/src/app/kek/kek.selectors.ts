import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromKek from './kek.reducer';

export const selectKekState = createFeatureSelector<fromKek.State>(
  fromKek.kekFeatureKey
);
