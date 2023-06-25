import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { inputTypes } from 'src/app/shared/types/types';
import { combineLatest } from 'rxjs';
@Component({
  selector: 'component-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputNumberComponent),
    },
  ],
})
export class InputNumberComponent implements ControlValueAccessor {
  @Input() public class: string = '';
  @Input() public label: string = '';
  @Input() public type: inputTypes = 'number';
  @Input() public id: string = '';

  constructor() {}
  public readonly valueControl = new FormControl(null || 0, [
    Validators.required,
  ]);
  ngOnInit(): void {
    combineLatest([this.valueControl.valueChanges]).subscribe(() => {
      const value = this._getValue();
      if (value) this._onChange(value);
    });
  }
  public writeValue(value: number | null): void {
    if (typeof value === 'number') {
      const _value = value;
      this.valueControl.setValue(_value);
    } else {
      this.valueControl.setValue(null);
    }
  }
  private _getValue(): number | null {
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
  private _onChange = (_value: number | null): void => undefined;
  public registerOnChange(fn: (value: number | null) => void): void {
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
