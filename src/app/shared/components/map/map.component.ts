import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Map,
  tileLayer,
  Marker,
  LatLngBounds,
  Layer,
  LatLng,
  DomUtil,
  Popup,
  DomEvent,
  divIcon,
  Icon,
  latLng,
} from 'leaflet';
import 'leaflet-contextmenu';
import { FlatMarker } from 'src/app/shared/models/flatMarker.model';
import { allActions } from 'src/app/stores/actions';
import { AppState } from 'src/app/stores/app.state';
import {
  MARKER_ICON_ORANGE,
  MARKER_ICON_SHADOW,
} from 'src/app/shared/configs/icons';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input('coords') public coords: { lat: number | null; lng: number | null } = {
    lat: 0,
    lng: 0,
  };
  @Input('markers') public markers: FlatMarker[] = [];
  @Input('selectedMarker') public selectedMarker!: {
    lat: number | null;
    lng: number | null;
  };
  @Output() emitNewLatLng = new EventEmitter<LatLng>();
  @Output() emitSelectedMarkerId = new EventEmitter<string>();

  @ViewChild('map')
  public map!: Map;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    window.addEventListener(`contextmenu`, (e) => {
      e.preventDefault();
    });
  }
  ngAfterViewInit(): void {
    this.initMap();
    this.emitRequestToGetMarkersData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.markers) this.refreshMarkers();
    if (changes.selectedMarker) this.goToThisMarker();
  }

  private emitRequestToGetMarkersData() {
    if (this.map) {
      this.store.dispatch(
        allActions.locationsActions.getFlatMarkersAction({
          boundaries: this.map.getBounds(),
        })
      );
    }
  }

  private initMap() {
    if (this.coords && this.coords.lat && this.coords.lng) {
      let map = new Map('map', {
        contextmenu: true,
        contextmenuWidth: 140,
        contextmenuItems: [
          {
            text: 'Add New Flat',
            callback: ($event: { latlng: LatLng }) => {
              this.emitNewLatLng.emit($event.latlng);
              // this.addMarker($event.latlng);
            },
          },
        ],
      }).setView([this.coords.lat, this.coords.lng], 13); // Adding visual surface layer
      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        minZoom: 5,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // defining Zoom function to get boundaries of map and emit request
      map.on('zoomend', () => {
        this.emitRequestToGetMarkersData();
      });

      // Defining moving function to get boundaries and emit request
      map.on('moveend', () => {
        this.emitRequestToGetMarkersData();
      });

      // Making map a global variable of the component
      if (!this.map) this.map = map;
    }
  }

  public createButton(label: string, container: any) {
    let btn = DomUtil.create('button', '', container);
    btn.setAttribute('type', 'button');
    btn.innerHTML = label;
    return btn;
  }

  private addMarker(latlng: { lat: number; lng: number }) {
    let popup = new Popup();
    let greenIcon = new Icon({
      iconUrl: MARKER_ICON_ORANGE,
      shadowUrl: MARKER_ICON_SHADOW,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
    let container = DomUtil.create('div');
    let button = this.createButton('Start from this location', container);
    DomEvent.on(button, 'click', () => {
      this.emitSelectedMarkerId.emit('1');
    });
    container.appendChild(button);
    popup.setContent(container);

    new Marker([latlng.lat, latlng.lng], { icon: greenIcon })
      .addTo(this.map)
      .bindPopup(popup)
      // .bindPopup(
      //   'A pretty CSS popup.<br> Easily customizable.<div onclick="this.name()">HOLA</div>'
      // )
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
      if (this.markers && this.markers.length > 0) {
        this.markers.forEach((marker: any) => {
          this.addMarker(marker);
        });
      }
    }
  }

  private goToThisMarker() {
    if (
      this.map &&
      this.selectedMarker &&
      this.selectedMarker.lat &&
      this.selectedMarker.lng
    ) {
      this.map.panTo(
        new LatLng(this.selectedMarker.lat, this.selectedMarker.lng)
      );
    }
  }

  private selectMarker($event: any) {}
}
