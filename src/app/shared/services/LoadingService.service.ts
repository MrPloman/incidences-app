import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  setLoadingFalse,
  setLoadingTrue,
} from '../stores/loading/loading.actions';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  constructor(private store: Store<{ status: boolean }>) {}
  setFalse() {
    this.store.dispatch(setLoadingFalse());
  }
  setTrue() {
    this.store.dispatch(setLoadingTrue());
  }
}
