import { createAction, props } from '@ngrx/store';
import { FlatModel } from 'src/app/shared/models/flat.model';
export const setNewFlatAction = createAction(
  '[Set New Flat Form Action]',
  props<{ latLng: { lat: number; lng: number } }>()
);
export const setNewFlatSuccessAction = createAction(
  '[Set New Flat Form Action Success]',
  props<{ flatData: FlatModel }>()
);
export const setNewFlatErrorAction = createAction(
  '[Set New Flat Form Action Error]',
  props<{ error: any }>()
);

export const getFlatAction = createAction(
  '[Get Flat Form Action]',
  props<{ id: string }>()
);

export const getFlatActionSuccess = createAction(
  '[Get Flat Form Action Success]',
  props<{ flatData: FlatModel }>()
);

export const getFlatActionError = createAction(
  '[Get Flat Form Action Error]',
  props<{ error: any }>()
);
