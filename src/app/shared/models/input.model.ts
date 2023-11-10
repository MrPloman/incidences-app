import { InputGenericInterface } from '../interfaces/InputGeneric.interface';

export class InputModel implements InputGenericInterface {
  value: any;
  label: string;
  inputType: string;
  id: string;
  className: string;
  required: boolean;
  disabled: boolean;
  validate: boolean;
  show: boolean;
  placeholder?: string;
  constructor(
    value: any,
    label: string,
    inputType: string,
    id: string,
    className: string,
    required: boolean,
    disabled: boolean,
    validate: boolean,
    show: boolean,
    placeholder: string
  ) {
    this.value = value;
    this.label = label;
    this.inputType = inputType;
    this.id = id;
    this.className = className;
    this.required = required;
    this.disabled = disabled;
    this.validate = validate;
    this.show = show;
    this.placeholder = placeholder;
  }
}
