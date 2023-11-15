import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FlatService } from 'src/app/flat/services/flat.service';
import { FlatFormModel } from 'src/app/shared/models/flatForm.model';
import { FormService } from 'src/app/shared/services/FormService.service';
import { AppState } from 'src/app/stores/app.state';

@Component({
  selector: 'flat-form',
  templateUrl: './flat-form.component.html',
  styleUrls: ['./flat-form.component.scss'],
})
export class FlatFormComponent implements OnInit, AfterContentChecked {
  constructor(
    private formService: FormService,
    private store: Store<AppState>,
    private flatService: FlatService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}
  public flatForm!: FlatFormModel;
  public loading: boolean = true;
  public _formService = this.formService;
  public orderByKeyvalue() {
    return 0;
  }
  ngOnInit(): void {
    this.loading = true;
    this.store.select('FlatFormsState').subscribe((state) => {
      if (state.currentFlatForm) {
        this.flatForm = this.flatService.parseFlatToForm(state.currentFlatForm);
        this.loading = state.loading;
        this.flatForm.data.controls.location.controls.lat.disable();
        this.flatForm.data.controls.location.controls.lng.disable();
        this.flatForm.data.controls.rating.controls.total.disable();
      }
    });
    if (this.flatForm && this.flatForm.data && this.flatForm.data.controls)
      this.flatForm.data.controls.rating.controls.total.setValue(
        this.formService.calculateTotalRating(
          this.flatForm.data.controls.rating
        )
      );
  }
  ngAfterContentChecked(): void {
    this.cd.detectChanges();
  }
  public updateTotalRatingValue($event: number) {
    console.log($event);
    if (this.flatForm && this.flatForm.data && this.flatForm.data.controls) {
      this.flatForm.data.controls.rating.controls.total.setValue(
        this.formService.calculateTotalRating(
          this.flatForm.data.controls.rating
        )
      );
    }
  }

  public validateForm() {
    if (!this.flatForm.data.valid) {
      this.flatForm.data.markAllAsTouched();
    }
  }
}
