import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
import { flatPages } from 'src/app/shared/types/types';
@Component({
  selector: 'app-flat-form',
  templateUrl: './flat-form.component.html',
  styleUrls: ['./flat-form.component.scss'],
})
export class FlatFormComponent implements OnInit, AfterContentChecked {
  constructor(
    private formService: FormService,
    private store: Store<AppState>,
    private flatService: FlatService,
    private cd: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute
  ) {}
  @Input() page: flatPages = 'create';
  public flatForm!: FlatFormModel;
  public loading = true;
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
    if (this)
      this.store.select('FlatFormsState').subscribe((state) => {
        if (state.currentFlatForm) {
          this.flatForm = this.flatService.parseFlatToForm(
            state.currentFlatForm
          );
          this.loading = state.loading;
          this.flatForm.data.controls.location.controls.lat.disable();
          this.flatForm.data.controls.location.controls.lng.disable();
          this.flatForm.data.controls.rating.controls.total.disable();
          this.flatForm.data.controls.price.controls.averagePrice.disable();
          // If we're in the show page route disable all
          if (this.page === 'show') {
            this.flatForm.data.controls.information.disable();
            this.flatForm.data.controls.location.disable();
            this.flatForm.data.controls.specs.disable();
            this.flatForm.data.controls.others.disable();
            this.flatForm.data.controls.price.disable();
            this.flatForm.data.controls.rating.disable();
          }
        }
      });
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
  public updateTotalRatingValue() {
    let total = 0;
    this.flatForm.data.controls.rating.valueChanges.subscribe((val) => {
      total = this.formService.calculateTotalRating(val);
      if (total !== this.flatForm.data.controls.rating.controls.total.value)
        this.flatForm.data.controls.rating.controls.total.setValue(total);
    });
  }

  public updateAveragePrice() {
    let firstPrice = 0;
    let currentPrice = 0;
    this.flatForm.data.controls.price.controls.currentPrice.controls.value.valueChanges.subscribe(
      (value) => {
        currentPrice = value ? value : 0;
        firstPrice = this.flatForm.data.controls.price.controls.firstPrice
          .controls.value.value
          ? this.flatForm.data.controls.price.controls.firstPrice.controls.value
              .value
          : 0;
        this.flatForm.data.controls.price.controls.averagePrice.setValue(
          (firstPrice + currentPrice) / 2
        );
      }
    );
    this.flatForm.data.controls.price.controls.firstPrice.controls.value.valueChanges.subscribe(
      (value) => {
        firstPrice = value ? value : 0;
        currentPrice = this.flatForm.data.controls.price.controls.currentPrice
          .controls.value.value
          ? this.flatForm.data.controls.price.controls.currentPrice.controls
              .value.value
          : 0;
        this.flatForm.data.controls.price.controls.averagePrice.setValue(
          (firstPrice + currentPrice) / 2
        );
      }
    );
  }

  public validateForm() {
    if (!this.flatForm.data.valid) {
      this.flatForm.data.markAllAsTouched();
    }
  }
}
