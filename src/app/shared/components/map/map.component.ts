import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Map, tileLayer, Marker, LatLngBounds, Layer, LatLng } from 'leaflet';
import 'leaflet-contextmenu';
import { FlatMarker } from 'src/app/models/flatMarker.model';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  @Input('coords') public coords: { lat: number; lng: number } = {
    lat: 0,
    lng: 0,
  };

  @Input('markers') public markers: FlatMarker[] = [];
  @Input('selectedMarker') public selectedMarker!: { lat: number; lng: number };
  @Output('boundaries') public boundaries = new EventEmitter<LatLngBounds>();
  @ViewChild('map')
  public map!: Map;

  constructor() {}

  ngOnInit() {
    window.addEventListener(`contextmenu`, (e) => {
      e.preventDefault();
    });
  }

  ngAfterViewInit() {
    this.initMap();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.markers) this.refreshMarkers();
    if (changes.selectedMarker) this.goToThisMarker();
  }

  private initMap() {
    let map = new Map('map', {
      contextmenu: true,
      contextmenuWidth: 140,
      contextmenuItems: [
        {
          text: 'Add Marker',
          callback: ($event: { latlng: { lat: number; lng: number } }) => {
            this.addMarker($event.latlng);
          },
        },
      ],
    }).setView([this.coords.lat, this.coords.lng], 13);

    // Emit first boundaries when map is loaded
    // this.boundaries.emit(map.getBounds());

    // Adding layer
    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 5,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Iteration inside diferent markers in order to position them on the map
    this.markers.forEach((mark: FlatMarker) => {
      if (!mark) return;
      new Marker([mark.lat, mark.lng])
        .on('click', () => {
          this.selectMarker(mark);
        })
        .addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.');
    });

    // Zoom function to get boundaries of map
    map.on('zoomend', () => {
      this.boundaries.emit(map.getBounds());
    });

    map.on('dragend', () => {
      this.boundaries.emit(map.getBounds());
    });

    // Making map a global variable of the component
    this.map = map;
  }

  private addMarker(latlng: { lat: number; lng: number }) {
    new Marker([latlng.lat, latlng.lng])
      .addTo(this.map)
      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      .on('click', () => {
        this.selectMarker(latlng);
      });
  }

  private refreshMarkers() {
    if (this.map) {
      this.map.eachLayer((layer: Layer) => {
        if (layer instanceof Marker) {
          this.map.removeLayer(layer);
        }
      });
      this.markers.forEach((marker: any) => {
        this.addMarker(marker);
      });
    }
  }
  private goToThisMarker() {
    if (this.map) {
      this.map.panTo(
        new LatLng(this.selectedMarker.lat, this.selectedMarker.lng)
      );
    }
  }
  private selectMarker($event: any) {
    console.log($event);
  }
}
