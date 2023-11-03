import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { allActions } from 'src/app/stores/actions';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(private store: Store<{ status: boolean }>) {}
  setFalse() {
    this.store.dispatch(allActions.loadingActions.setUILoadingFalse());
  }
  setTrue() {
    this.store.dispatch(allActions.loadingActions.setUILoadingTrue());
  }
}
