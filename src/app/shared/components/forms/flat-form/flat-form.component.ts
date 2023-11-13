import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { FlatService } from 'src/app/flat/services/flat.service';
import { NewFlat } from 'src/app/shared/configs/empty_models/NewFlat';
import { FlatModel } from 'src/app/shared/models/flat.model';
import { FlatFormModel } from 'src/app/shared/models/flatForm.model';
import { FormService } from 'src/app/shared/services/FormService.service';
import { AppState } from 'src/app/stores/app.state';

@Component({
  selector: 'flat-form',
  templateUrl: './flat-form.component.html',
  styleUrls: ['./flat-form.component.scss'],
})
export class FlatFormComponent implements OnInit {
  constructor(
    private formService: FormService,
    private store: Store<AppState>,
    private flatService: FlatService
  ) {}
  public flatForm: FlatFormModel | undefined = undefined;
  public loading: boolean = true;
  public _formService = this.formService;
  public orderByKeyvalue() {
    return 0;
  }
  ngOnInit(): void {
    this.loading = true;
    this.store.select('FlatFormsState').subscribe((state) => {
      setTimeout(() => {
        if (state.currentFlatForm) {
          this.flatForm = this.flatService.parseFlatToForm(
            state.currentFlatForm
          );
          this.loading = state.loading;

          console.log(this.flatForm);
        }
      }, 1000);
    });
  }
  public validateForm() {}
}
