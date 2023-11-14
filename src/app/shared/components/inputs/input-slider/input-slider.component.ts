import { Component, Input, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { inputTypes } from 'src/app/shared/types/types';

@Component({
  selector: 'component-input-slider',
  templateUrl: './input-slider.component.html',
  styleUrls: ['./input-slider.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputSliderComponent),
    },
  ],
})
export class InputSliderComponent {
  @Input() public class: string = '';
  @Input() public label: string = '';
  @Input() public id: string = '';
  @Input() public width: string = '100%';
  @Input() public required: boolean = false;

  constructor() {}
  public readonly valueControl = new FormControl();
  ngOnInit(): void {
    combineLatest([this.valueControl.valueChanges]).subscribe(() => {
      const value = this._getValue();
      if (value) this._onChange(value);
    });
    if (this.required) this.valueControl.addValidators([Validators.required]);
  }
  public writeValue(value: number): void {
    const _value = value;
    if (_value !== this.valueControl.value) this.valueControl.setValue(_value);
  }
  private _getValue(): number {
    const value = this.valueControl.value;
    return value;
  }
  // On change section
  private _onChange = (_value: number): void => {
    this.writeValue(_value);
  };
  public registerOnChange(fn: (value: number) => void): void {
    this._onChange = fn;
  }
  // On touched section
  public onTouched = (): void => {
    undefined;
  };
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
    this.writeValue(50);
  }
}
