import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewFlatForm } from 'src/app/shared/configs/empty_models/NewFlatForm';
import { FlatFormModel } from 'src/app/shared/models/flatForm.model';

@Component({
  selector: 'create-flat',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateFlatComponent {
  public flatData: FlatFormModel = NewFlatForm;
  constructor() {}
}
