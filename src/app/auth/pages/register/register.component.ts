import { Component, OnInit } from '@angular/core';
import { Observable, Observer, BehaviorSubject } from 'rxjs';
import { IncidencesListService } from 'src/app/incidences/services/IncidencesListService.service';

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
  public list = [];
  constructor(incidencesListService: IncidencesListService) {
    incidencesListService.observableIncidendesList$.subscribe((data) => {
      this.list = data;
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 2000);
    // this.observableProfile$.subscribe(this.observerProfile$);
  }
}
