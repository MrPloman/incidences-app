import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Observer, BehaviorSubject } from 'rxjs';
import { IncidencesListService } from 'src/app/incidences/services/IncidencesListService.service';
import { LoadingService } from 'src/app/shared/services/LoadingService.service';
import { allActions } from 'src/app/stores/actions';
import { AppState } from 'src/app/stores/app.state';

@Component({
  selector: 'page-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public isLoading = true;
  // public profile$: BehaviorSubject<{ name: string; surname: string }> =
  //   new BehaviorSubject({ name: '', surname: '' });
  // public observerProfile$: Observer<{ name: string; surname: string }> = {
  //   next: (element) => {
  //     if (element) this.profile$.next(element);
  //   },
  //   error: (err) => {
  //     console.error(err);
  //     if (err) this.profile$.next({ name: '', surname: '' });
  //   },
  //   complete: () => {
  //   },
  // };
  // public observableProfile$: Observable<{ name: string; surname: string }> =
  //   new Observable((subs) => {
  //     subs.next({ name: 'Pol', surname: 'Plana' });
  //     setTimeout(() => {
  //       subs.next({ name: 'a', surname: 's' });
  //     }, 1000);
  //   });
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
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 2000);
    // this.observableProfile$.subscribe(this.observerProfile$);
  }
}
