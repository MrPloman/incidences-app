import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { IncidencesListService } from '../../services/IncidencesListService.service';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/shared/services/LoadingService.service';

@Component({
  selector: 'page-incidences-list',
  templateUrl: './incidences-list.component.html',
  styleUrls: ['./incidences-list.component.scss'],
})
export class IncidencesListComponent {
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
  public router: Router;
  public _incidencesListService: IncidencesListService;
  public loadingService: LoadingService;
  public list: { userId: number; id: number; title: string; body: string }[] =
    [];
  constructor(
    incidencesListService: IncidencesListService,
    loadingService: LoadingService,
    router: Router
  ) {
    this.loadingService = loadingService;
    this._incidencesListService = incidencesListService;
    this.router = router;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 2000);
    // this.observableProfile$.subscribe(this.observerProfile$);
    this._incidencesListService.observableIncidendesList$.subscribe(
      (data: { userId: number; id: number; title: string; body: string }[]) => {
        setTimeout(() => {
          if (data && data.length > 0) {
            this.list = data;
          }
          this.isLoading = false;
        }, 2000);
      }
    );
  }
  public goToIncidenceDetail(incidence: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }): void {
    this.loadingService.setTrue();
    setTimeout(() => {
      this.router.navigate([`incidences/${incidence.id}`]);
      this.loadingService.setFalse();
    }, 1000);
  }
}
