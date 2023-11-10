import { Component, Input } from '@angular/core';
import { inputTypes } from 'src/app/shared/types/types';

@Component({
  selector: 'component-input-slider',
  templateUrl: './input-slider.component.html',
  styleUrls: ['./input-slider.component.scss'],
})
export class InputSliderComponent {
  @Input() public class: string = '';
  @Input() public label: string = '';
  @Input() public id: string = '';
  @Input() public width: string = '100%';
  @Input() public disabled: boolean = false;
}
