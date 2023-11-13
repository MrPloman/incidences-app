import { Component, Input, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { NewFlatForm } from 'src/app/shared/configs/empty_models/NewFlatForm';
import { FlatFormModel } from 'src/app/shared/models/flatForm.model';
import { FormService } from 'src/app/shared/services/FormService.service';
import { AppState } from 'src/app/stores/app.state';

@Component({
  selector: 'flat-form',
  templateUrl: './flat-form.component.html',
  styleUrls: ['./flat-form.component.scss'],
})
export class FlatFormComponent implements OnInit {
  constructor(
    private formService: FormService,
    private store: Store<AppState>
  ) {}
  public flat: FlatFormModel = NewFlatForm;
  public loading: boolean = true;
  public _formService = this.formService;
  public orderByKeyvalue() {
    return 0;
  }
  ngOnInit(): void {
    this.loading = true;
    this.store.select('FlatFormsState').subscribe((state) => {
      setTimeout(() => {
        this.loading = state.loading;
        if (state.currentFlatForm) this.flat = state.currentFlatForm;
      }, 1000);
    });
  }
  public validateForm() {
    console.log(this.flat?.data.valid);
  }
}
