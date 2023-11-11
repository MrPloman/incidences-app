import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NewFlatForm } from 'src/app/shared/configs/empty_models/NewFlatForm';
import { FlatFormModel } from 'src/app/shared/models/flatForm.model';
import {
  setUILoadingFalse,
  setUILoadingTrue,
} from 'src/app/stores/actions/UIloading.actions';
import { AppState } from 'src/app/stores/app.state';

@Component({
  selector: 'create-flat',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateFlatComponent {
  public flatData: FlatFormModel = NewFlatForm;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.dispatch(setUILoadingFalse());
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
