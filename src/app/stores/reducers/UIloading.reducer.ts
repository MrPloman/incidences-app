import { createReducer, on } from '@ngrx/store';
import {
  setUILoadingTrue,
  setUILoadingFalse,
} from '../actions/UIloading.actions';
import { UILoadingState } from '../states/UIloading.state';

const initialState: UILoadingState = {
  loading: false,
};

export const UIloadingReducer = createReducer(
  initialState,
  on(setUILoadingTrue, () => ({ loading: true })),
  on(setUILoadingFalse, () => ({ loading: false }))
);
