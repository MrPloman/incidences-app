import { FormControl, FormGroup } from '@angular/forms';

export class FilterLocationsForm {
  data: FormGroup<{
    searchValue: FormControl<string>;
    chips: FormGroup<{
      news: FormControl<boolean>;
    }>;
  }>;
  constructor(data: any) {
    this.data = data;
  }
}
