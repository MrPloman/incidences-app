import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { latLng } from 'leaflet';
import { Subscription } from 'rxjs';
import { NewFlat } from 'src/app/shared/configs/empty_models/NewFlat';
import {
  setUILoadingFalse,
  setUILoadingTrue,
} from 'src/app/stores/actions/UIloading.actions';
import { setNewFlatAction } from 'src/app/stores/actions/flatForms.actions';
import { AppState } from 'src/app/stores/app.state';

@Component({
  selector: 'create-flat',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateFlatComponent {
  public loadingSubscription!: Subscription;
  public coords: { lat: number; lng: number } = { lat: 0, lng: 0 };
  public flatForm = undefined;
  public loading: boolean = true;
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.store.dispatch(setUILoadingTrue());
    this.loadingSubscription = this.store
      .select('UILoadingState')
      .subscribe((state) => (this.loading = state.loading));
    this.route.paramMap.subscribe((paramMap) => {
      let lng: string | null = paramMap.get('lng');
      let lat: string | null = paramMap.get('lat');
      if (lng && lat) {
        this.coords = {
          lat: parseFloat(lat),
          lng: parseFloat(lng),
        };
        this.store.dispatch(
          setNewFlatAction({
            latLng: this.coords,
          })
        );
        setTimeout(() => {
          this.store.dispatch(setUILoadingFalse());
        }, 1000);
      }
    });
  }
  ngAfterContentChecked(): void {
    this.cd.detectChanges();
  }
}
