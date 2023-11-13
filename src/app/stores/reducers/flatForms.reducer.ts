import { createReducer, on } from '@ngrx/store';
import { setNewFlat } from '../actions/flatForms.actions';
import { FlatFormsState } from '../states/flatForms.state';
import { NewFlat } from 'src/app/shared/configs/empty_models/NewFlat';

export const initialFlatFormState: FlatFormsState = {
  currentFlatForm: undefined,
  loading: false,
  loaded: false,
  error: undefined,
};
export const _flatFormsReducers = createReducer(
  initialFlatFormState,
  on(setNewFlat, (state, { latLng }) => {
    let flatForm = NewFlat;
    flatForm.data.location.lng = latLng.lng;
    flatForm.data.location.lat = latLng.lat;
    return {
      currentFlatForm: flatForm,
      loaded: true,
      loading: false,
      error: undefined,
    };
  })
);
export function flatFormsReducer(state: any, action: any) {
  return _flatFormsReducers(state, action);
}
