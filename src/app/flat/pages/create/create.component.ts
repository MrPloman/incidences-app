import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {
  setUILoadingFalse,
  setUILoadingTrue,
} from 'src/app/stores/actions/UIloading.actions';
import { setNewFlatAction } from 'src/app/stores/actions/flatForms.actions';
import { AppState } from 'src/app/stores/app.state';

@Component({
  selector: 'app-create-flat',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateFlatComponent implements OnInit, AfterContentChecked {
  public loadingSubscription!: Subscription;
  public coords: { lat: number; lng: number } = { lat: 0, lng: 0 };
  public flatForm = undefined;
  public loading = true;
  private store = inject(Store<AppState>);
  private route = inject(ActivatedRoute);
  private cd = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.store.dispatch(setUILoadingTrue());
    this.loadingSubscription = this.store
      .select('UILoadingState')
      .subscribe((state) => (this.loading = state.loading));
    this.route.paramMap.subscribe((paramMap) => {
      const lng: string | null = paramMap.get('lng');
      const lat: string | null = paramMap.get('lat');
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
