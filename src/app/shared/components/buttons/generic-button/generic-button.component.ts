import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss'],
})
export class GenericButtonComponent {
  @Input() submit: boolean = false;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() label: string = 'Accept';
}
