import { createReducer, on } from '@ngrx/store';

import { FlatFormsState } from '../states/flatForms.state';
import { NewFlat } from 'src/app/shared/configs/empty_models/NewFlat';
import {
  setNewFlatErrorAction,
  setNewFlatSuccessAction,
  setNewFlatAction,
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
  }))
);
export function flatFormsReducers(state: any, action: any) {
  return _flatFormsReducers(state, action);
}
