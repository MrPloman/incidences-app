import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  OnChanges,
  AfterViewInit,
  inject,
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
  Icon,
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
export class MapComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() public coords: { lat: number | null; lng: number | null } = {
    lat: 0,
    lng: 0,
  };
  @Input() public markers: FlatMarker[] = [];
  @Input() public selectedMarker!: {
    lat: number | null;
    lng: number | null;
  };
  @Input() public searchValue: string | null = '';

  @Output() emitNewLatLng = new EventEmitter<LatLng>();
  @Output() emitBoundaries = new EventEmitter<LatLngBounds>();

  @Output() emitSelectedMarkerId = new EventEmitter<string>();
  @Output() emitSelectedMarkerPopup = new EventEmitter<FlatMarker>();

  @ViewChild('map')
  public map!: Map;
  private store = inject(Store<AppState>);

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
          searchValue: this.searchValue,
        })
      );
      this.emitBoundaries.emit(this.map.getBounds());
    }
  }

  private initMap() {
    if (this.coords && this.coords.lat && this.coords.lng) {
      const options: any = {
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
      };
      const map = new Map('map', options).setView(
        [this.coords.lat, this.coords.lng],
        13
      ); // Adding visual surface layer
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
    const btn = DomUtil.create('button', '', container);
    btn.setAttribute('type', 'button');
    btn.innerHTML = label;
    return btn;
  }

  private addMarker(marker: FlatMarker) {
    const popup = new Popup();
    const greenIcon = new Icon({
      iconUrl: MARKER_ICON_ORANGE,
      shadowUrl: MARKER_ICON_SHADOW,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });
    const container = DomUtil.create('div', 'container-popup');

    // Information Container Areas
    const informationContainer = DomUtil.create('div', 'information-container');
    const header = DomUtil.create('h2', 'title');
    if (marker && marker.information && marker.information.title) {
      header.append(marker.information.title);
    }
    informationContainer.appendChild(header);

    // Button Bar Area
    const buttonBar = DomUtil.create('div', 'button-bar');
    const goToFormButton = this.createButton('Go To Information', container);
    const cancelButton = this.createButton('Cancel', container);
    DomEvent.on(goToFormButton, 'click', () => {
      this.emitSelectedMarkerId.emit('1');
    });
    DomEvent.on(cancelButton, 'click', () => {
      popup.close();
    });

    // Appending all areas to main container
    buttonBar.appendChild(goToFormButton);
    buttonBar.appendChild(cancelButton);
    container.appendChild(informationContainer);
    container.appendChild(buttonBar);
    popup.setContent(container);

    new Marker([marker.lat, marker.lng], { icon: greenIcon })
      .addTo(this.map)
      .bindPopup(popup)
      .on('click', () => {
        this.selectMarker(marker);
      })
      .on('popupclose', () => {
        this.selectMarker(marker);
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
        this.markers.forEach((marker: FlatMarker) => {
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
  public selectMarker($event: FlatMarker) {
    this.emitSelectedMarkerPopup.emit($event);
  }
}
