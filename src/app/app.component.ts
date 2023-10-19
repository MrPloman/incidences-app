import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLoading } from './shared/stores/loading/loading.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public loading$;
  constructor(private store: Store) {
    this.loading$ = this.store.select(selectLoading);
  }
}
