import { Component, OnInit, signal } from '@angular/core';
import { LatLng, LatLngBounds } from 'leaflet';
import { LocationsService } from './locations.service';
import { Store } from '@ngrx/store';
import { AppState } from '../stores/app.state';
import {
  setUILoadingFalse,
  setUILoadingTrue,
} from '../stores/actions/UIloading.actions';
import { Subscription } from 'rxjs';
import { FlatMarker } from '../models/flatMarker.model';
import { allActions } from '../stores/actions';
import { LocationsState } from '../stores/states/locations.state';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  public markersSubscription: Subscription = new Subscription();
  public markers = signal<FlatMarker[]>([]);
  public coords: { lat: number; lng: number } = { lat: 0, lng: 0 };
  public loading: boolean = true;
  constructor(
    private locationsService: LocationsService,
    private store: Store<AppState>
  ) {
    this.loading = true;
    this.markers.set([]);
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.coords.lat = position.coords.latitude;
      this.coords.lng = position.coords.longitude;
    });
    this.markersSubscription = this.store
      .select('LocationsState')
      .subscribe((state: LocationsState) => {
        setTimeout(() => {
          this.loading = state.loading;

          if (state.markers && state.loaded) {
            this.markers.set(state.markers);
          }
        });
      });
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  ngOnDestroy(): void {
    this.markersSubscription.unsubscribe();
  }
  public goToCoordMap(coord: { lat: number; lng: number }) {
    this.coords = coord;
  }
}
