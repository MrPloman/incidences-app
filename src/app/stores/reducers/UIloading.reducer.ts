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
  on(setUILoadingTrue, (state) => ({ loading: true })),
  on(setUILoadingFalse, (state) => ({ loading: false }))
);
