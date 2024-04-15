import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { combineLatest } from 'rxjs';
import { inputTypes } from 'src/app/shared/types/types';

@Component({
  selector: 'app-component-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputTextareaComponent),
    },
  ],
})
export class InputTextareaComponent implements OnInit {
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
