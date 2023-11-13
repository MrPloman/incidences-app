import { createReducer, on } from '@ngrx/store';
import { setNewFlatForm } from '../actions/flatForms.actions';
import { FlatFormsState } from '../states/flatForms.state';
import { FlatFormModel } from 'src/app/shared/models/flatForm.model';
import { NewFlatForm } from 'src/app/shared/configs/empty_models/NewFlatForm';

export const initialFlatFormState: FlatFormsState = {
  currentFlatForm: undefined,
  loading: false,
  loaded: false,
  error: undefined,
};
export const _flatFormsReducers = createReducer(
  initialFlatFormState,
  on(setNewFlatForm, (state, { latLng }) => {
    let flatForm = NewFlatForm;
    flatForm.data.controls.rating.get('total')?.disable();
    flatForm.data.controls.location.get('lng')?.disable();
    flatForm.data.controls.location.get('lat')?.disable();
    flatForm.data.controls.location.patchValue({
      lng: latLng.lat,
      lat: latLng.lng,
    });
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
