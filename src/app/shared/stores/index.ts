// src/app/store/index.ts
import { ActionReducerMap } from '@ngrx/store';
import { loadingReducer } from './loading/loading.reducer';
import { LoadingState } from './loading/loading.state';

export interface AppState {
  loading: LoadingState;
  // Add other state slices as needed.
}

export const reducers: ActionReducerMap<AppState> = {
  loading: loadingReducer,
  // Add other reducers for different state slices as needed.
};
