import { Component, Input } from '@angular/core';
import { FlatMarker } from 'src/app/models/flatMarker.model';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input('markerInfo') public markerInfo!: FlatMarker;
}
