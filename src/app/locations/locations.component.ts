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
import {
  setCurrentPosition,
  getFlatMarkersAction,
} from '../stores/actions/locations.actions';

import { LatLng, LatLngBounds } from 'leaflet';
import { FilterLocationsForm } from 'src/app/shared/models/filterLocationsForm.model';
import { FormControl, FormGroup } from '@angular/forms';

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
  public markerSelected: FlatMarker | undefined = undefined;
  public searchForm: FilterLocationsForm = {
    data: new FormGroup({
      searchValue: new FormControl<string | null>(''),
      chips: new FormGroup({
        news: new FormControl<boolean | null>(false),
      }),
    }),
  };
  private boundaries: LatLngBounds | undefined = undefined;

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
    this.searchForm.data.valueChanges.subscribe((value) => {
      if (value.searchValue && value.searchValue.length >= 3) {
        this.searchByName(value.searchValue);
      }
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

  public setBoundaries($event: any) {
    this.boundaries = $event;
  }

  public searchByName($event: any) {
    console.log($event);
    if (!$event || !this.boundaries) return;
    this.store.dispatch(
      getFlatMarkersAction({
        boundaries: this.boundaries,
        searchValue: $event,
      })
    );
  }

  public centerInTheMarkerSelected(coord: { lat: number; lng: number }) {
    this.markerSelected = coord;
    this.coords.set(coord);
    this.store.dispatch(setCurrentPosition({ currentPosition: coord }));
  }
  public goToNewForm($event: LatLng) {
    if ($event && $event.lat && $event.lng) {
      this.router.navigate([`flat/create/${$event.lat}/${$event.lng}`], {});
    }
  }

  public goToExistingForm($event: string) {
    this.router.navigate([`flat/update/${$event}`], {});
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

  public manageMarkerSelection(marker: FlatMarker) {
    if (this.markerSelected !== marker) this.centerInTheMarkerSelected(marker);
    else this.router.navigate([`flat/1`], {});
  }
}
