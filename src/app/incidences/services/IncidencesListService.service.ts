import { inject, Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class IncidencesListService {
  private http = inject(HttpClient);
  public observerIncidences$: Observer<[]> = {
    next: (elements) => {
      return elements;
    },
    error: (err) => {
      throw new Error(err);
    },
    complete: () => {
      return;
    },
  };
  public observableIncidendesList$: Observable<any> = new Observable(
    (subscription) => {
      this.http
        .get<any>('https://jsonplaceholder.typicode.com/posts', {
          observe: 'response',
        })
        .subscribe((res) => res && res.body && subscription.next(res.body));
    }
  );
}
