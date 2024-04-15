import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  forwardRef,
} from '@angular/core';
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
  selector: 'app-component-input-number',
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
export class InputNumberComponent implements ControlValueAccessor, OnInit {
  @Input() public class = '';
  @Input() public label = '';
  @Input() public type: inputTypes = 'number';
  @Input() public id = '';
  @Input() public required = false;
  @Input() public formGroup!: FormGroup;

  @Output() emitChange = new EventEmitter<number | null>();

  public readonly valueControl = new FormControl(null || 0);
  ngOnInit(): void {
    combineLatest([this.valueControl.valueChanges]).subscribe(() => {
      let value = this._getValue();
      if (typeof value === 'string') value = parseFloat(value);
      if (value === null) value = 0;
      this.emitChange.emit(value);
      this._onChange(value);
    });
    if (this.required) this.valueControl.addValidators([Validators.required]);
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
