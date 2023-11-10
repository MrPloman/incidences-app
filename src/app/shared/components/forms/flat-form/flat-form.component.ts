import { Component } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup } from '@angular/forms';
import { NewFlatForm } from 'src/app/shared/configs/empty_models/NewFlatForm';
import { FlatFormModel } from 'src/app/shared/models/flatForm.model';

@Component({
  selector: 'flat-form',
  templateUrl: './flat-form.component.html',
  styleUrls: ['./flat-form.component.scss'],
})
export class FlatFormComponent {
  public flat: FlatFormModel = NewFlatForm;
}
