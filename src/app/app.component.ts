import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './stores/app.state';
import { LoadingService } from './shared/services/LoadingService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public loading$: boolean = false;
  constructor(
    private store: Store<AppState>,
    private loadingService: LoadingService
  ) {
    this.loadingService.setFalse();
    this.store.select('UILoadingState').subscribe(({ loading }) => {
      this.loading$ = loading;
    });
  }
}
