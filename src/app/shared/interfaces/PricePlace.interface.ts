import { FormControl, FormGroup } from '@angular/forms';

export interface PricePlaceInterface {
  firstPrice: {
    date: Date;
    value: number | null;
  };
  currentPrice: {
    date: Date;
    value: number | null;
  };
  averagePrice: number | null;
}
