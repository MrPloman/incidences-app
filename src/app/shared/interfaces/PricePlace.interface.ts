import { FormControl, FormGroup } from '@angular/forms';

export interface PricePlaceInterface {
  firstPrice: FormGroup<{
    date: FormControl;
    value: FormControl;
  }>;
  currentPrice: FormGroup<{
    date: FormControl;
    value: FormControl;
  }>;
  averagePrice: FormControl;
}
