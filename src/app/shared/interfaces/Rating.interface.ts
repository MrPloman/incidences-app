import { FormControl, FormGroup } from '@angular/forms';

export interface RatingInterface {
  total: FormControl;
  price: FormControl;
  clearfull: FormControl;
  modern: FormControl;
  amenities: FormControl;
  publicTransport: FormControl;
  neighbours: FormControl;
  neighbourhood: FormControl;
  building: FormControl;
  tenantment: FormControl;
  realState: FormControl;
  views: FormControl;
}
