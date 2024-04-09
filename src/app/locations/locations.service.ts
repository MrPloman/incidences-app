import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { LatLngBounds } from 'leaflet';
import { AppState } from '../stores/app.state';
import { Observable } from 'rxjs';
import { FlatMarker } from '../shared/models/flatMarker.model';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}
  private markersFromDB: FlatMarker[] = [
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
  public get getMarkersFromDB(): FlatMarker[] {
    return this.markersFromDB;
  }

  public getLocationsThroughCoords(
    boundaries: LatLngBounds,
    searchValue: string | null
  ) {
    const search: string | null = !!searchValue ? searchValue : null;
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
