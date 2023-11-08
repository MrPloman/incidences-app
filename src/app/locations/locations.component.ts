import { Component, signal } from '@angular/core';
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

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent {
  constructor(
    private locationsService: LocationsService,
    private store: Store<AppState>
  ) {}
  public loadingSubscription: Subscription = new Subscription();
  public markers!: FlatMarker[];
  public coords: { lat: number; lng: number } = { lat: 0, lng: 0 };
  public loading: boolean = false;
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.locationsService.getAllLocations().then((value) => {
      console.log(value);
      this.markers = value;
      this.loading = false;
    });
  }
  ngOnInit(): void {
    this.loading = true;

    navigator.geolocation.getCurrentPosition((position) => {
      this.coords.lat = position.coords.latitude;
      this.coords.lng = position.coords.longitude;
    });

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  public getBoundaries(boundaries: LatLngBounds) {
    this.markers = this.locationsService.getLocationsThroughCoords(boundaries);
  }
  public goToCoordMap(coord: { lat: number; lng: number }) {
    this.coords = coord;
  }
}
