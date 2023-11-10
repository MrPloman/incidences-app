import { FormControl, FormGroup } from '@angular/forms';

export interface LocationInterface {
  street: FormControl;
  address: FormControl;
  number: FormControl;
  floor: FormControl;
  door: FormControl;
  block: FormControl;
  gate: FormControl;
  zip: FormControl;
  city: FormControl;
  province: FormControl;
  state: FormControl;
  country: FormControl;
  lng: FormControl;
  lat: FormControl;
}
