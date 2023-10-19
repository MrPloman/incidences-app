// loading.selectors.ts

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoadingState } from './loading.state';

const selectLoadingState = createFeatureSelector<LoadingState>('loading');

export const selectLoading = createSelector(
  selectLoadingState,
  (state) => state.loading
);
