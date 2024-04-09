import { FormControl, FormGroup } from '@angular/forms';

export class FilterLocationsForm {
  data: FormGroup<{
    searchValue: FormControl<string | null>;
    chips: FormGroup<{
      news: FormControl<boolean | null>;
    }>;
  }>;
  constructor(data: any) {
    this.data = data;
  }
}
