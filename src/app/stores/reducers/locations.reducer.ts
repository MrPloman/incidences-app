import { createReducer, on } from '@ngrx/store';
import { LocationsState } from '../states/locations.state';
import {
  getFlatMarkersAction,
  getFlatMarkersActionError,
  getFlatMarkersActionSuccess,
} from '../actions/locations.actions';
export const initialLocationsState: LocationsState = {
  markers: [],
  loading: false,
  loaded: false,
  error: undefined,
};
export const _LocationsReducers = createReducer(
  initialLocationsState,
  on(getFlatMarkersAction, (state, { boundaries }) => ({
    ...state,
    loaded: false,
    loading: true,
    error: undefined,
  })),
  on(getFlatMarkersActionSuccess, (state, { markers }) => ({
    ...state,
    loaded: true,
    loading: false,
    markers: markers,
    error: undefined,
  })),
  on(getFlatMarkersActionError, (state, error) => ({
    loaded: false,
    loading: false,
    markers: [],
    error: error,
  }))
);
export function locationsReducer(state: any, action: any) {
  return _LocationsReducers(state, action);
}
