import { Component, ElementRef, Input, ViewChild, signal } from '@angular/core';
import { Map, map, tileLayer, marker, Marker } from 'leaflet';
import 'leaflet-contextmenu';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @Input('markers') public markers = signal<{ lat: number; lng: number }[]>([]);
  @ViewChild('map')
  public map!: Map;
  @Input('coords') public coords: { lat: number; lng: number } = {
    lat: 0,
    lng: 0,
  };

  constructor() {}

  ngOnInit() {
    window.addEventListener(`contextmenu`, (e) => {
      e.preventDefault();
    });
    navigator.geolocation.getCurrentPosition((position) => {
      this.coords.lat = position.coords.latitude;
      this.coords.lng = position.coords.longitude;
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
            new Marker([$event.latlng.lat, $event.latlng.lng])
              .addTo(map)
              .bindPopup('A pretty CSS popup.<br> Easily customizable.');
          },
        },
      ],
    }).setView([this.coords.lat, this.coords.lng], 13);
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    this.markers().forEach((mark: { lat: number; lng: number }) => {
      if (mark)
        new Marker([mark.lat, mark.lng])
          .on('click', () => {
            this.selectMarker(mark);
          })
          .addTo(map)
          .bindPopup('A pretty CSS popup.<br> Easily customizable.');
    });

    this.map = map;
  }

  public addMarker() {
    this.map.on('contextmenu', (e) => {
      const coord = e.latlng;
      console.log(e);

      console.log();

      new Marker([coord.lat, coord.lng])
        .on('click', () => {
          this.selectMarker({ lat: coord.lat, lng: coord.lng });
        })
        .addTo(this.map);
    });
  }
  public selectMarker($event: any) {
    console.log($event);
  }
}
