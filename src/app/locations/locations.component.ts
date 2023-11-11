import { Component, OnInit, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../stores/app.state';
import { setUILoadingTrue } from '../stores/actions/UIloading.actions';
import { Subscription } from 'rxjs';
import { LocationsState } from '../stores/states/locations.state';
import { FlatMarker } from '../shared/models/flatMarker.model';
import { Router } from '@angular/router';
import { setCurrentPosition } from '../stores/actions/locations.actions';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  public markersSubscription: Subscription = new Subscription();
  public markers = signal<FlatMarker[]>([]);
  public coords = signal({ lat: 0, lng: 0 });
  public globalLoading: boolean = false;
  public loading = signal(false);
  constructor(private store: Store<AppState>, private router: Router) {
    this.markers.set([]);
  }

  ngOnInit(): void {
    this.globalLoading = true;
    if (this.coords().lat === 0 && this.coords().lng === 0) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.coords.set({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        this.store.dispatch(
          setCurrentPosition({ currentPosition: this.coords() })
        );
      });
    }
    this.markersSubscription = this.store
      .select('LocationsState')
      .subscribe((state: LocationsState) => {
        setTimeout(() => {
          if (!state) return;
          this.markers.set(state.markers);
          this.loading.set(state.loading);
          this.coords.set(state.currentPosition);
          if (state.error) console.error(state.error);
          this.globalLoading = false;
        }, 500);
      });

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  ngOnDestroy(): void {
    this.markersSubscription.unsubscribe();
  }
  public goToCoordMap(coord: { lat: number; lng: number }) {
    this.coords.set(coord);
  }
  public goToNewForm($event: any) {
    this.store.dispatch(setUILoadingTrue());
    this.router.navigate(['flat/create'], {
      skipLocationChange: true,
    });
  }
}
