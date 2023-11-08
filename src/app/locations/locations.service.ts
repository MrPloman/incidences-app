import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { LatLngBounds } from 'leaflet';
import { AppState } from '../stores/app.state';
import { FlatMarker } from '../models/flatMarker.model';

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
    setTimeout(() => {
      this.markersFromDB = [
        { lat: 51.509865, lng: -0.118092 },
        { lat: 41.390205, lng: 2.154007 },
        { lat: 41.902782, lng: 12.496366 },
        { lat: 40.73061, lng: -73.935242 },
        { lat: 38.829545106506025, lng: -77.04402923583984 },
      ];
    }, 2000);

    return this.markersFromDB.filter((mark: any) => {
      if (
        mark &&
        mark.lat < boundaries.getNorth() &&
        mark.lat > boundaries.getSouth() &&
        mark.lng > boundaries.getWest() &&
        mark.lng < boundaries.getEast()
      ) {
        return mark;
      }
    });
  }
}
