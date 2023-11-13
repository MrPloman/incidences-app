import { createAction, props } from '@ngrx/store';
import { LatLng } from 'leaflet';
export const setNewFlatForm = createAction(
  '[Set New Flat Form]',
  props<{ latLng: { lat: number; lng: number } }>()
);