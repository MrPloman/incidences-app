import { Component, Input } from '@angular/core';
import { FlatMarker } from 'src/app/shared/models/flatMarker.model';

@Component({
  selector: 'app-card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public markerInfo!: FlatMarker;
}
