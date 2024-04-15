import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-component-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputDateComponent),
    },
  ],
})
export class InputDateComponent implements OnInit {
  @Input() public class = '';
  @Input() public label = '';
  @Input() public id = '';
  @Input() public width = '100%';
  @Input() public required = false;
  @Input() public formGroup!: FormGroup;
  @Input() public formControlName!: string;

  public readonly valueControl = new FormControl(Date);

  ngOnInit(): void {
    combineLatest([this.valueControl.valueChanges]).subscribe(() => {
      const value = this._getValue();
      this._onChange(value);
    });
    if (this.required) this.valueControl.addValidators([Validators.required]);
  }
  public writeValue(value: any): void {
    if (value) {
      const _value = value;
      this.valueControl.setValue(_value);
    } else {
      this.valueControl.setValue(null);
    }
  }
  private _getValue(): any {
    try {
      if (this.valueControl.invalid) return null;
      const value = this.valueControl.value;
      return value;
    } catch {
      // Return null if something throws
      return null;
    }
  }
  // On change section
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private _onChange = (_value: any): void => undefined;
  public registerOnChange(fn: (value: any) => void): void {
    this._onChange = fn;
  }
  // On touched section
  public onTouched = (): void => undefined;
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.valueControl.disable();
    } else {
      this.valueControl.enable();
    }
  }
  public removeValue() {
    this.writeValue(null);
  }
}
