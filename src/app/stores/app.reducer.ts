// src/app/store/index.ts
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';

import * as reducers from './reducers';

export const AppReducers: ActionReducerMap<AppState> = {
  UILoadingState: reducers.UIloadingReducer,
  AuthState: reducers.authReducers,
};
