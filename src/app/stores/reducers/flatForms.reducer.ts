import { createReducer, on } from '@ngrx/store';

import { FlatFormsState } from '../states/flatForms.state';
import { NewFlat } from 'src/app/shared/configs/empty_models/NewFlat';
import {
  setNewFlatErrorAction,
  setNewFlatSuccessAction,
  setNewFlatAction,
  getFlatAction,
  getFlatActionSuccess,
  getFlatActionError,
} from '../actions/flatForms.actions';

export const initialFlatFormState: FlatFormsState = {
  currentFlatForm: undefined,
  loading: false,
  loaded: false,
  error: undefined,
};
export const _flatFormsReducers = createReducer(
  initialFlatFormState,
  on(setNewFlatAction, (state, { latLng }) => ({
    currentFlatForm: undefined,
    loaded: false,
    loading: true,
    error: undefined,
  })),
  on(setNewFlatSuccessAction, (state, { flatData }) => ({
    currentFlatForm: flatData,
    loading: false,
    loaded: true,
    error: undefined,
  })),

  on(setNewFlatErrorAction, (state, { error }) => ({
    currentFlatForm: undefined,
    loaded: false,
    loading: true,
    error: error,
  })),
  on(getFlatAction, (state, { id }) => ({
    currentFlatForm: undefined,
    loaded: false,
    loading: true,
    error: undefined,
  })),
  on(getFlatActionSuccess, (state, { flatData }) => ({
    currentFlatForm: flatData,
    loaded: true,
    loading: false,
    error: undefined,
  })),
  on(getFlatActionError, (state, { error }) => ({
    currentFlatForm: undefined,
    loaded: false,
    loading: false,
    error: error,
  }))
);
export function flatFormsReducers(state: any, action: any) {
  return _flatFormsReducers(state, action);
}
