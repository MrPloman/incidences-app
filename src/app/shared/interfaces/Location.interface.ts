import { FormControl, FormGroup } from '@angular/forms';

export interface LocationInterface {
  street: string;
  address: string;
  number: number | null;
  floor: string;
  door: string;
  block: string;
  gate: string;
  zip: number | null;
  city: string;
  province: string;
  state: string;
  country: string;
  lng: number | null;
  lat: number | null;
}
