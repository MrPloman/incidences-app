import { FormControl } from '@angular/forms';

export interface OthersInterface {
  buildingYear: number | null;
  floorsNumber: number | null;
  elevator: boolean;
  accessibility: boolean;
  furnituresIncluded: boolean;
  contractByRealState: boolean;
  balcony: boolean;
  yard: boolean;
}
