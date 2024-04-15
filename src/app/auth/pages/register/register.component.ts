import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncidencesListService } from 'src/app/incidences/services/IncidencesListService.service';
import { LoadingService } from 'src/app/shared/services/LoadingService.service';
import { allActions } from 'src/app/stores/actions';
import { AppState } from 'src/app/stores/app.state';

@Component({
  selector: 'app-page-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public isLoading = true;

  public loadingService: LoadingService;
  public list = [];
  constructor(
    incidencesListService: IncidencesListService,
    loadingService: LoadingService,
    private store: Store<AppState>
  ) {
    this.loadingService = loadingService;
    incidencesListService.observableIncidendesList$.subscribe((data) => {
      this.list = data;
    });
  }
  ngOnInit(): void {
    this.loadingService.setFalse();
    this.store.dispatch(
      allActions.authActions.createUserAction({
        user: { email: 'pol@a.com', password: '' },
      })
    );
  }
}
