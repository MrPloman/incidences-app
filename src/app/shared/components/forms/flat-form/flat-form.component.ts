import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FlatService } from 'src/app/flat/services/flat.service';
import { FlatFormModel } from 'src/app/shared/models/flatForm.model';
import { FormService } from 'src/app/shared/services/FormService.service';
import { AppState } from 'src/app/stores/app.state';

@Component({
  selector: 'flat-form',
  templateUrl: './flat-form.component.html',
  styleUrls: ['./flat-form.component.scss'],
})
export class FlatFormComponent implements OnInit, AfterContentChecked {
  constructor(
    private formService: FormService,
    private store: Store<AppState>,
    private flatService: FlatService,
    private cd: ChangeDetectorRef,
    private router: Router
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
      if (state.currentFlatForm) {
        this.flatForm = this.flatService.parseFlatToForm(state.currentFlatForm);
        this.loading = state.loading;
        this.flatForm.data.controls.location.controls.lat.disable();
        this.flatForm.data.controls.location.controls.lng.disable();
        this.flatForm.data.controls.rating.controls.total.disable();
      }
    });
    if (this.flatForm && this.flatForm.data && this.flatForm.data.controls)
      this.flatForm.data.controls.rating.controls.total.setValue(
        this.formService.calculateTotalRating(
          this.flatForm.data.controls.rating
        )
      );
  }
  ngAfterContentChecked(): void {
    this.cd.detectChanges();
  }
  public updateTotalRatingValue($event: number) {
    console.log($event);
    if (this.flatForm && this.flatForm.data && this.flatForm.data.controls) {
      this.flatForm.data.controls.rating.controls.total.setValue(
        this.formService.calculateTotalRating(
          this.flatForm.data.controls.rating
        )
      );
    }
  }
  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach((control: any) => {
      control.markAsDirty(true);
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
  public validateForm() {
    if (this.flatForm?.data.valid) {
      this.router.navigate(['']);
    }
    if (this.flatForm) {
      this.markFormGroupTouched(this.flatForm.data);
      // let obj = this.flatForm.data.controls;
      // this.flatForm.data.controls.location;
      // Object.keys(this.flatForm.data.controls.location.controls).forEach(
      //   (field: string) => {
      //     let obj = this.flatForm?.data.controls.location.controls;
      //     if (obj) {
      //       const control =
      //         this.flatForm?.data.controls.location.controls[
      //           field as keyof typeof obj
      //         ].get(field);
      //       control?.markAsTouched({ onlySelf: true });
      //     }
      //   }
      // );
      // Object.keys(this.flatForm.data.controls).forEach((field: string) => {
      // if (this.flatForm?.data.controls) {
      //   let obj2 =
      //     this.flatForm.data.controls[field as keyof typeof obj].controls;
      //   Object.keys(
      //     this.flatForm.data.controls[field as keyof typeof obj].controls
      //   ).forEach((input: string) => {
      //     if (
      //       this.flatForm?.data?.controls[field as keyof typeof obj].controls[
      //         input as keyof typeof obj2
      //       ]
      //     ) {
      //       this.flatForm?.data?.controls[field as keyof typeof obj].controls[
      //         input as keyof typeof obj2
      //       ].value
      //     }

      //     // console.log(input);
      //     // this.flatForm?.data.controls[field as keyof typeof obj].get(input);
      //   });
      // }

      //{2}
      // });
    }
  }
}
