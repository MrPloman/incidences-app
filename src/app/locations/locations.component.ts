import {
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../stores/app.state';
import { Subscription } from 'rxjs';
import { LocationsState } from '../stores/states/locations.state';
import { FlatMarker } from '../shared/models/flatMarker.model';
import { Router } from '@angular/router';
import { setCurrentPosition } from '../stores/actions/locations.actions';
import { LatLng } from 'leaflet';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit, AfterContentChecked {
  public markersSubscription: Subscription = new Subscription();
  public markers = signal<FlatMarker[]>([]);
  public coords = signal<{ lat: number | null; lng: number | null }>({
    lat: null,
    lng: null,
  });
  public globalLoading: boolean = true;
  public loading = signal(false);
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    this.markers.set([]);
  }

  ngOnInit(): void {
    this.getClientCoords().then((latLng: { lat: number; lng: number }) => {
      if (!latLng) return;
      this.store.dispatch(setCurrentPosition({ currentPosition: latLng }));
      this.markersSubscription = this.store
        .select('LocationsState')
        .subscribe((state: LocationsState) => {
          if (!state) return;
          this.markers.set(state.markers);
          this.loading.set(state.loading);
          if (
            this.coords().lat !== state.currentPosition.lat &&
            this.coords().lng !== state.currentPosition.lng
          ) {
            this.coords.set(state.currentPosition);
          }

          if (state.error) console.error(state.error);
          this.globalLoading = false;
        });
    });
  }

  ngAfterContentChecked(): void {
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    this.coords.set({ lat: null, lng: null });
    this.markers.set([]);
    this.markersSubscription.unsubscribe();
  }
  public centerInTheMarkerSelected(coord: { lat: number; lng: number }) {
    if (this.coords().lat !== coord.lat && this.coords().lng !== coord.lng)
      this.coords.set(coord);
  }
  public goToNewForm($event: LatLng) {
    if ($event && $event.lat && $event.lng) {
      this.router.navigate([`flat/create/${$event.lat}/${$event.lng}`], {
        skipLocationChange: true,
      });
    }
  }

  public async getClientCoords(): Promise<{ lat: number; lng: number }> {
    const coordPromise: Promise<{ lat: number; lng: number }> = new Promise(
      (resolve) => {
        navigator.geolocation.getCurrentPosition((position) => {
          if (!position) return;
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      }
    );
    return await coordPromise;
  }
}
