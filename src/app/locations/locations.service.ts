import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LatLngBounds } from 'leaflet';
import { AppState } from '../stores/app.state';
import { Observable } from 'rxjs';
import { FlatMarker } from '../shared/models/flatMarker.model';
import { LocationsMock } from 'src/app/shared/configs/mocks/locations_mock';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}
  private markersFromDB: FlatMarker[] = LocationsMock;
  public get getMarkersFromDB(): FlatMarker[] {
    return this.markersFromDB;
  }

  public getLocationsThroughCoords(
    boundaries: LatLngBounds,
    searchValue: string | null
  ) {
    const search: string | null = searchValue ? searchValue : null;
    const _markers: Observable<FlatMarker[]> = new Observable((subs) => {
      setTimeout(() => {
        subs.next(
          this.markersFromDB.filter((mark: FlatMarker) => {
            if (
              mark &&
              mark.lat < boundaries.getNorth() &&
              mark.lat > boundaries.getSouth() &&
              mark.lng > boundaries.getWest() &&
              mark.lng < boundaries.getEast()
            ) {
              if (!search) {
                return mark;
              } else if (
                mark.information &&
                mark.information.address
                  .toLowerCase()
                  .includes(search.toLowerCase())
              ) {
                return mark;
              } else return;
            } else return;
          })
        );

        subs.complete();
      }, 500);
    });
    return _markers;
  }
}
