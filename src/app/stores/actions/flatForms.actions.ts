import { createAction, props } from '@ngrx/store';
import { LatLng } from 'leaflet';
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
