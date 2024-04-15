import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { inputTypes } from 'src/app/shared/types/types';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-component-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputTextComponent),
    },
  ],
})
export class InputTextComponent implements ControlValueAccessor, OnInit {
  @Input() public class = '';
  @Input() public label = '';
  @Input() public type: inputTypes = 'text';
  @Input() public id = '';
  @Input() public width = '100%';
  @Input() public required = false;
  @Input() public formGroup!: FormGroup;

  public readonly valueControl = new FormControl(null || '');

  ngOnInit(): void {
    combineLatest([this.valueControl.valueChanges]).subscribe(() => {
      const value = this._getValue();
      this._onChange(value);
    });
    if (this.required) this.valueControl.addValidators([Validators.required]);
  }
  public writeValue(value: string | null): void {
    if (typeof value === 'string' && value) {
      const _value = value;
      this.valueControl.setValue(_value);
    } else {
      this.valueControl.setValue(null);
    }
  }
  private _getValue(): string | null {
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
  private _onChange = (_value: string | null): void => undefined;
  public registerOnChange(fn: (value: string | null) => void): void {
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
