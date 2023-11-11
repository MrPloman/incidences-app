import { Injectable } from '@angular/core';
import { Observable, Subscription, asyncScheduler } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}
  public createUser({ email, password }: User) {
    let obs;
    return (obs = new Observable((subs) => {
      setTimeout(() => {
        return subs.next(
          new User(email, password, '091283091823AS', 'support', {
            name: 'Pol',
            surname: 'Plana',
            avatar: '',
          })
        );
      }, 4000);
    }));
  }
}
