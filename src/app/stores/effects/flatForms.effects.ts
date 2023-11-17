import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, of, switchMap, tap } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { FlatService } from 'src/app/flat/services/flat.service';
import { LatLng } from 'leaflet';
import { allActions } from '../actions';
import { FlatModel } from 'src/app/shared/models/flat.model';
@Injectable({
  providedIn: 'root',
})
export class FlatFormsEffects {
  constructor(private $actions: Actions, private flatService: FlatService) {}
  public flatFormsEffect = createEffect(() =>
    this.$actions.pipe(
      ofType(allActions.flatFormsActions.setNewFlatAction),
      switchMap((action: { latLng: { lat: number; lng: number } }) =>
        this.flatService.createNewFlat(action.latLng).pipe(
          map((flatData: FlatModel) =>
            allActions.flatFormsActions.setNewFlatSuccessAction({
              flatData,
            })
          ),
          catchError((err) =>
            of(
              allActions.flatFormsActions.setNewFlatErrorAction({ error: err })
            )
          )
        )
      )
    )
  );
}
