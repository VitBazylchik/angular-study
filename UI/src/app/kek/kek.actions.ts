import { createAction, props } from '@ngrx/store';

export const loadKeks = createAction(
  '[Kek] Load Keks'
);

export const loadKeksSuccess = createAction(
  '[Kek] Load Keks Success',
  props<{ data: any }>()
);

export const loadKeksFailure = createAction(
  '[Kek] Load Keks Failure',
  props<{ error: any }>()
);
