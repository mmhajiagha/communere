import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { LatLngInterface, LocationInterface } from '@angular-test/admin-panel/utils';
import { ToastrService } from 'ngx-toastr';
import { ADMIN_PANEL_LOCATIONS_CONST } from './admin-panel-locations.const';

@Component({
  selector: 'admin-panel-locations',
  templateUrl: './admin-panel-locations.component.html',
  styleUrls: ['./admin-panel-locations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPanelLocationsComponent {
  locations: LocationInterface[] = ADMIN_PANEL_LOCATIONS_CONST.locations;
  centerLocation: LatLngInterface = ADMIN_PANEL_LOCATIONS_CONST.centerLocation;
  location: LocationInterface = {
    data: {
      title: ''
    },
    id: '',
    lat: this.centerLocation.lat,
    lng: this.centerLocation.lng
  };


  @ViewChild('testMapRef', { static: true }) private testMapRef: any;

  constructor(private _toastrService: ToastrService) {
  }

  onLocationChange(evt: LatLngInterface) {
    const { lng, lat } = evt;
    this.location.lat = lat;
    this.location.lng = lng;
  }

  onAddLocationClick() {
    this.testMapRef.removeAllMarkers();
    this.location.data = { title: '', tooltip: 'Drag me to your preferred location' };
    this.location.lat = this.centerLocation.lat;
    this.location.lng = this.centerLocation.lng;
    this.testMapRef.addMarker(this.location, true);
  }

  onSubmitLocationClick(title: string) {
    this.location.data = { title, tooltip: '' };
    this.locations.push({ ...this.location });
    this.testMapRef.removeAllMarkers();
    this.testMapRef.addMarkersList(this.locations);
    this._toastrService.success('Location added successfully');
  }

  onCloseClick() {
    this.testMapRef.removeAllMarkers();
    this.testMapRef.addMarkersList(this.locations);
  }

  onLocationDeleteClick(locationId: string) {
    this.locations.splice(this.locations.findIndex(item => item.id === locationId), 1);
    this.testMapRef.removeMarkerById(locationId);
  }
}
