import { createReducer, on } from '@ngrx/store';
import { setLoadingTrue, setLoadingFalse } from './loading.actions';
import { LoadingState } from './loading.state';

const initialState: LoadingState = {
  loading: false,
};

export const loadingReducer = createReducer(
  initialState,
  on(setLoadingTrue, (state) => ({ ...state, loading: true })),
  on(setLoadingFalse, (state) => ({ ...state, loading: false }))
);
