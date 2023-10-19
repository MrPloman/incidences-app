import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { IncidencesListService } from '../../services/IncidencesListService.service';
import { LoadingService } from 'src/app/shared/services/LoadingService.service';

@Component({
  selector: 'page-incidences-detail',
  templateUrl: './incidences-detail.component.html',
  styleUrls: ['./incidences-detail.component.scss'],
})
export class IncidencesDetailComponent {
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
  //     console.log('finished');
  //   },
  // };
  // public observableProfile$: Observable<{ name: string; surname: string }> =
  //   new Observable((subs) => {
  //     subs.next({ name: 'Pol', surname: 'Plana' });
  //     setTimeout(() => {
  //       subs.next({ name: 'a', surname: 's' });
  //     }, 1000);
  //   });
  public _incidencesListService: IncidencesListService;
  public loadingService: LoadingService;
  public incidence: {
    userId: number;
    id: number;
    title: string;
    body: string;
  } = {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  };
  constructor(
    incidencesListService: IncidencesListService,
    loadingService: LoadingService
  ) {
    this.loadingService = loadingService;
    this._incidencesListService = incidencesListService;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 2000);
    // this.observableProfile$.subscribe(this.observerProfile$);
    this._incidencesListService.observableIncidendesList$.subscribe(
      (data: { userId: number; id: number; title: string; body: string }) => {
        setTimeout(() => {
          if (data) {
            this.incidence = data;
          }
          this.isLoading = false;
          this.loadingService.setFalse();
        }, 2000);
      }
    );
  }
}
