import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { NewFlatForm } from 'src/app/shared/configs/empty_models/NewFlatForm';
import { FlatFormModel } from 'src/app/shared/models/flatForm.model';
import {
  setUILoadingFalse,
  setUILoadingTrue,
} from 'src/app/stores/actions/UIloading.actions';
import { setNewFlatForm } from 'src/app/stores/actions/flatForms.actions';
import { AppState } from 'src/app/stores/app.state';

@Component({
  selector: 'create-flat',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateFlatComponent {
  public coords: { lat: number; lng: number } = { lat: 0, lng: 0 };
  public flatForm: FlatFormModel | undefined = undefined;
  public loading: boolean = true;
  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.store.dispatch(setUILoadingTrue());
    this.route.paramMap.subscribe((paramMap) => {
      let lng: string | null = paramMap.get('lng');
      let lat: string | null = paramMap.get('lat');
      if (lng && lat)
        this.coords = {
          lat: parseFloat(lat),
          lng: parseFloat(lng),
        };
      this.store.dispatch(setNewFlatForm({ latLng: this.coords }));
    });

    // this.flatData.data.controls.location.controls['lat'].setValue(
    //   this.route.snapshot.params.lat
    // );
    // this.flatData.data.controls.location.controls['lng'].setValue(
    //   this.route.snapshot.params.lng
    // );
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
