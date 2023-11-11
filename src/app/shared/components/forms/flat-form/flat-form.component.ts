import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup } from '@angular/forms';
import { NewFlatForm } from 'src/app/shared/configs/empty_models/NewFlatForm';
import { FlatFormModel } from 'src/app/shared/models/flatForm.model';
import { FormService } from 'src/app/shared/services/FormService.service';

@Component({
  selector: 'flat-form',
  templateUrl: './flat-form.component.html',
  styleUrls: ['./flat-form.component.scss'],
})
export class FlatFormComponent implements OnInit {
  constructor(private formService: FormService) {}
  public _formService = this.formService;
  public flat: FlatFormModel = NewFlatForm;
  public orderByKeyvalue() {
    return 0;
  }
  ngOnInit(): void {
    this.flat.data.controls.rating.get('total')?.disable();
    this.flat.data.controls.location.get('lng')?.disable();
    this.flat.data.controls.location.get('lat')?.disable();
  }
}
