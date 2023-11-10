import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, of, switchMap, tap } from 'rxjs';
import { allActions } from '../actions';
import { AuthService } from 'src/app/shared/services/AuthService.service';
import { User } from 'src/app/shared/models/user.model';
import { LocationsService } from 'src/app/locations/locations.service';
import { LatLngBounds } from 'leaflet';
import { FlatMarker } from 'src/app/shared/models/flatMarker.model';
@Injectable({
  providedIn: 'root',
})
export class LocationsEffects {
  constructor(
    private $actions: Actions,
    private locationsService: LocationsService
  ) {}
  public getFlatMarkersThroughCoordsEffect = createEffect(() =>
    this.$actions.pipe(
      ofType(allActions.locationsActions.getFlatMarkersAction),
      switchMap((action: { boundaries: LatLngBounds }) =>
        this.locationsService.getLocationsThroughCoords(action.boundaries).pipe(
          map((flatMarkers: FlatMarker[]) =>
            allActions.locationsActions.getFlatMarkersActionSuccess({
              markers: flatMarkers,
            })
          ),
          catchError((err) =>
            of(
              allActions.locationsActions.getFlatMarkersActionError({
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
