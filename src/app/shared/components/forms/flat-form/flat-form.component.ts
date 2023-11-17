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
import {
  US_STATES_OPTIONS,
  COUNTRY_OPTIONS,
  STREET_OPTIONS,
  SPAIN_PROVINCE_OPTIONS,
  FRANCE_PROVINCES_OPTIONS,
} from 'src/app/shared/configs/options';
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
  public options = {
    US_STATES_OPTIONS,
    COUNTRY_OPTIONS,
    STREET_OPTIONS,
    SPAIN_PROVINCE_OPTIONS,
    FRANCE_PROVINCES_OPTIONS,
  };
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
        this.flatForm.data.controls.price.controls.averagePrice.disable();
      }
    });
    if (this.flatForm && this.flatForm.data && this.flatForm.data.controls)
      this.flatForm.data.controls.rating.controls.total.setValue(
        this.formService.calculateTotalRating(
          this.flatForm.data.controls.rating
        )
      );
  }
  public getOptions(label: string) {
    switch (label) {
      case 'street':
        return STREET_OPTIONS;
      case 'country':
        return COUNTRY_OPTIONS;
      case 'state':
        return US_STATES_OPTIONS;

      default:
        return [];
    }
  }
  ngAfterContentChecked(): void {
    this.cd.detectChanges();
  }
  public updateTotalRatingValue($event: number) {
    if (this.flatForm && this.flatForm.data && this.flatForm.data.controls) {
      this.flatForm.data.controls.rating.controls.total.setValue(
        this.formService.calculateTotalRating(
          this.flatForm.data.controls.rating
        )
      );
    }
  }

  public updateAveragePrice($event: number | null) {
    this.flatForm.data.controls.price.patchValue({
      averagePrice:
        ((this.flatForm.data.controls.price.controls.currentPrice.controls.value
          .value || 0) +
          (this.flatForm.data.controls.price.controls.firstPrice.controls.value
            .value || 0)) /
        2,
    });
    console.log();
    // this.flatForm.data.controls.price
    //   .get('averagePrice')
    //   ?.setValue(
    //     ((this.flatForm.data.controls.price.controls.currentPrice.get('value')
    //       ?.value || 0) +
    //       (this.flatForm.data.controls.price.controls.firstPrice.get('value')
    //         ?.value || 0)) /
    //       2
    //   );
    // const first = this.flatForm.data.controls.price.controls.currentPrice
    //   .controls.value.value
    //   ? this.flatForm.data.controls.price.controls.currentPrice.controls.value
    //       .value
    //   : 0;
    // const second = this.flatForm.data.controls.price.controls.firstPrice
    //   .controls.value.value
    //   ? this.flatForm.data.controls.price.controls.firstPrice.controls.value
    //       .value
    //   : 0;
    // let result = this.formService.calculateAveragePrice(first, second);
    // console.log(result);
    // this.flatForm.data.controls.price.controls.averagePrice.setValue(result);
    // console.log(this.flatForm.data.controls.price.controls);
  }

  public validateForm() {
    if (!this.flatForm.data.valid) {
      this.flatForm.data.markAllAsTouched();
    }
  }
}
