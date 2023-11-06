import { Component, ElementRef, ViewChild } from '@angular/core';
import { Map, map, tileLayer, marker, Marker } from 'leaflet';
import 'leaflet-contextmenu';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @ViewChild('map')
  public map!: Map;
  public coords: { lat: number; long: number } = {
    lat: 0,
    long: 0,
  };

  constructor() {}

  ngOnInit() {
    window.addEventListener(`contextmenu`, (e) => {
      e.preventDefault();
    });
    navigator.geolocation.getCurrentPosition((position) => {
      this.coords.lat = position.coords.latitude;
      this.coords.long = position.coords.longitude;
    });
  }

  ngAfterViewInit() {
    let map = new Map('map', {
      contextmenu: true,
      contextmenuWidth: 140,
      contextmenuItems: [
        {
          text: 'Add Marker',
          callback: ($event: { latlng: { lat: number; lng: number } }) => {
            new Marker([$event.latlng.lat, $event.latlng.lng]).addTo(map);
          },
        },
      ],
    }).setView([this.coords.lat, this.coords.long], 13);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    this.map = map;
  }

  public addMarker() {
    console.log('entra');
    this.map.on('contextmenu', (e) => {
      var coord = e.latlng;
      var lat = coord.lat;
      var lng = coord.lng;
      console.log(
        'You clicked the map at latitude: ' + lat + ' and longitude: ' + lng
      );

      new Marker([lat, lng]).addTo(this.map);
    });
  }
}
