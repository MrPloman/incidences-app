import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { LatLngBounds } from 'leaflet';
import { AppState } from '../stores/app.state';
import { FlatMarker } from '../models/flatMarker.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}
  private markersFromDB: FlatMarker[] = [];

  public get getMarkersFromDB(): FlatMarker[] {
    return this.markersFromDB;
  }

  public async getAllLocations() {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        this.markersFromDB = [
          { lat: 51.509865, lng: -0.118092 },
          { lat: 41.390205, lng: 2.154007 },
          { lat: 41.902782, lng: 12.496366 },
          { lat: 40.73061, lng: -73.935242 },
          { lat: 38.829545106506025, lng: -77.04402923583984 },
        ];
        resolve();
      }, 1000);
    });
    return this.markersFromDB;
  }

  public getLocationsThroughCoords(boundaries: LatLngBounds) {
    this.markersFromDB = [
      {
        lat: 51.509865,
        lng: -0.118092,
        information: {
          title: 'C place',
          address: 'RAT Ave Apt C, 60099, New Hampshire',
          description:
            'Lorem Ipsum asdkasd asjdasd asdjjads asjdajsd asjdjasd asjdjasd',
          rating: 90,
          interactions: 122,
          user: {
            username: 'mrploman',
            avatar: '',
          },
        },
      },
      {
        lat: 41.390205,
        lng: 2.154007,
        information: {
          title: 'Fucking insane',
          address: 'Texas Ave 1112, 12000, Great Country',
          description:
            'Lorem Ipsum asdkasd asjdasd asdjjads asjdajsd asjdjasd asjdjasd',
          rating: 1,
          interactions: 122,
          user: {
            username: 'mrploman',
            avatar: '',
          },
        },
      },
      {
        lat: 41.902782,
        lng: 12.496366,
        information: {
          title: 'Cozy place',
          address: 'Evergreen terrace',
          description:
            'Lorem Ipsum asdkasd asjdasd asdjjads asjdajsd asjdjasd asd hdfjasd asdbaskdhjasd ashdaksda',
          rating: 38,
          interactions: 1,
          user: {
            username: 'mrploman',
            avatar: '',
          },
        },
      },
      {
        lat: 40.73061,
        lng: -73.935242,
        information: {
          title: 'Cozy place',
          address: 'Alabama Ave Apt A, 60099, Great Lakes',
          description:
            'Lorem Ipsum asdkasd asjdasd asdjjads asjdajsd asjdjasd asjdjasd',
          rating: 76,
          interactions: 1881,
          user: {
            username: 'mrploman',
            avatar: '',
          },
        },
      },
      {
        lat: 38.829545106506025,
        lng: -77.04402923583984,
        information: {
          title: 'Cozy place',
          address: 'Alabama Ave Apt A, 60099, Great Lakes',
          description:
            'Lorem Ipsum asdkasd asjdasd asdjjads asjdajsd asjdjasd asjdjasd',
          rating: 90,
          interactions: 122,
          user: {
            username: 'mrploman',
            avatar: '',
          },
        },
      },
    ];
    let _markers: Observable<FlatMarker[]> = new Observable((subs) => {
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
              return mark;
            } else return;
          })
        );
        subs.complete();
      }, 1000);
    });
    return _markers;
    // return this.markersFromDB.filter((mark: any) => {
    //   if (
    //     mark &&
    //     mark.lat < boundaries.getNorth() &&
    //     mark.lat > boundaries.getSouth() &&
    //     mark.lng > boundaries.getWest() &&
    //     mark.lng < boundaries.getEast()
    //   ) {
    //     return mark;
    //   }
    // })
  }
}
