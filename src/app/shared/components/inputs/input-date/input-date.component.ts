import { Component, Input, SimpleChanges, forwardRef } from '@angular/core';
import {
  FormControl,
  FormControlName,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { combineLatest } from 'rxjs';
import { inputTypes } from 'src/app/shared/types/types';

@Component({
  selector: 'component-input-date',
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
export class InputDateComponent {
  @Input() public class: string = '';
  @Input() public label: string = '';
  @Input() public id: string = '';
  @Input() public width: string = '100%';
  @Input() public required: boolean = false;
  @Input() public formGroup!: FormGroup;
  @Input() public formControlName!: string;

  constructor() {}
  public readonly valueControl = new FormControl(Date);
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }
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
