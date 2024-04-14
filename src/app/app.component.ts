import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './stores/app.state';
import { LoadingService } from './shared/services/LoadingService.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private store: Store<AppState>,
    private loadingService: LoadingService
  ) {}
}
