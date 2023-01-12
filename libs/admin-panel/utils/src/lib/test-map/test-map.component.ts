import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as L from 'leaflet';
import { latLng, tileLayer } from 'leaflet';
import { LocationInterface } from './test-map.interface';

@Component({
  selector: 'test-map',
  templateUrl: './test-map.component.html',
  styleUrls: ['./test-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestMapComponent implements OnInit {
  @Input() lat: number = 51.512172;
  @Input() lng: number = -0.138702;
  @Input() center: { lat: number, lng: number } = { lat: 51.512172, lng: -0.138702 };
  @Input() interactive: boolean | undefined;

  @Input() locations: LocationInterface[] = [];

  @Output() locationChange = new EventEmitter<any>();
  @Output() locationDelete = new EventEmitter<any>();
  map: any;
  mapCenterPoint = latLng(this.lat, this.lng);
  markerIcon = new L.Icon({
    iconUrl: './assets/images/marker-icon-2x-red.png',
    shadowUrl: './assets/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  private mapMarkers: any = {};

  ngOnInit() {
    this.setMap();
    let marker: any;
    this.addMarkersList(this.locations);
    if (this.interactive) {
      this.map.on('click', (e: any) => {
        tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
        const coords = e.latlng.toString().split(',');
        const lat = coords[0].split('(');
        const lng = coords[1].split(')');
        if (marker) {
          this.map.removeLayer(marker);
        }
        marker = L.marker([lat[1], lng[0]], { icon: this.markerIcon, draggable: true }).addTo(this.map);
        this.mapMarkers[this.getNewMarkerIndex()] = marker;
        this.locationChange.emit({ lat: lat[1], lng: lng[0] });
      });
    }
  }

  private getNewMarkerIndex():string {
    return (Object.keys(this.mapMarkers).length + 1).toString();
  }

  private addMarkersList(locations: LocationInterface[]) {
    this.mapMarkers = {};
    if (locations) {
      locations.forEach((location: LocationInterface) => {
        this.addMarker(location);
      });
    }
  }

  removeMarkerById(id: string) {
    if (this.mapMarkers[id]) {
      this.map.removeLayer(this.mapMarkers[id]);
      this.mapMarkers[id] = undefined;
    }
  }

  removeAllMarkers() {
    const markers = Object.values(this.mapMarkers);
    markers.forEach(marker => {
      if (marker) {
        this.map.removeLayer(marker);
      }
    });
    this.mapMarkers = {};
  }

  addMarker(location: LocationInterface, isDraggable?: boolean) {
    const locationId: string = (location.id ? location.id : this.getNewMarkerIndex());
    const { lng, lat, data } = location;
    const marker = L.marker([lat, lng], { icon: this.markerIcon, draggable: isDraggable })
      .bindPopup(this.getLocationPopup(data, locationId));
    if (data.tooltip) {
      marker.bindTooltip(data.tooltip);
    }
    marker.on('dragend', (e) => {
      const { lng, lat } = marker.getLatLng();
      this.locationChange.emit({ lat, lng });
    });
    marker.addTo(this.map);
    this.mapMarkers[locationId] = marker;
  }

  private getLocationPopup(data: any, locationId: string) {
    const { title } = data;
    const div = document.createElement('div');
    div.innerHTML = `<h4 style="text-align: center;">${title}</h4>`;
    const button = document.createElement('button');
    button.classList.add('popup-btn');
    button.setAttribute('data-id', locationId);
    button.innerText = 'Delete';
    button.onclick = (elem: any) => {
      const locationId = elem.target.getAttribute('data-id');
      this.locationDelete.emit(locationId);
    };
    div.appendChild(button);
    return div;
  }

  setMap() {
    if (this.map) {
      this.map.remove();
    }
    this.map = L.map('map', {
      center: this.mapCenterPoint,
      zoom: 12
    });
    const tiles = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="http://www.osm.org/copyright">OpenStreetMap</a> contributors'
    });
    tiles.addTo(this.map);
  }
}
