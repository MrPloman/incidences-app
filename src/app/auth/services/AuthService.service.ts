import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public createUser({ email, password }: User) {
    return new Observable((subs) => {
      setTimeout(() => {
        return subs.next(
          new User(email, password, '091283091823AS', 'support', {
            name: 'Pol',
            surname: 'Plana',
            avatar: '',
          })
        );
      }, 4000);
    });
  }
}
