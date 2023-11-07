import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent {
  public markers = signal([
    { lat: 1, lng: 1 },
    { lat: 3, lng: 2 },
    { lat: 4, lng: 2 },
    { lat: 6, lng: 6 },
  ]);
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  public goToCoordMap(coord: { lat: number; lng: number }) {}
}
