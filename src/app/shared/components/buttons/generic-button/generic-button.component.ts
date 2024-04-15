import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.scss'],
})
export class GenericButtonComponent {
  @Input() submit = false;
  @Input() disabled = false;
  @Input() loading = false;
  @Input() label = 'Accept';
}
