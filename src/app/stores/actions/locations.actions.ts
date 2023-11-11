import { createAction, props } from '@ngrx/store';
import { LatLngBounds } from 'leaflet';
import { FlatMarker } from 'src/app/shared/models/flatMarker.model';
export const getFlatMarkersAction = createAction(
  '[Get Flat Markers]',
  props<{ boundaries: LatLngBounds }>()
);
export const getFlatMarkersActionSuccess = createAction(
  '[Get Flat Markers Success]',
  props<{ markers: FlatMarker[] }>()
);
export const getFlatMarkersActionError = createAction(
  '[Create WHATEVER Error]',
  props<{ error: any }>()
);
export const setCurrentPosition = createAction(
  '[Set Current Position]',
  props<{ currentPosition: { lat: number; lng: number } }>()
);
