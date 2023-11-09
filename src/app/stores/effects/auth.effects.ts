import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, of, switchMap } from 'rxjs';
import { allActions } from '../actions';
import { AuthService } from 'src/app/shared/services/AuthService.service';
import { User } from 'src/app/models/user.model';
@Injectable({
  providedIn: 'root',
})
export class AuthEffects {
  constructor(private $actions: Actions, private authService: AuthService) {}
  public createUserEffect = createEffect(() =>
    this.$actions.pipe(
      ofType(allActions.authActions.createUserAction),
      switchMap((action: { user: User }) =>
        this.authService.createUser(action.user).pipe(
          map((user: any) =>
            allActions.authActions.createUserActionSucess({
              user: user,
            })
          ),
          catchError((err) =>
            of(
              allActions.authActions.createUserActionError({
                error: {
                  name: err.name,
                  status: err.status,
                  error: err.error,
                },
              })
            )
          )
        )
      )
    )
  );
}
