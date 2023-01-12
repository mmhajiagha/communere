import { LatLngInterface, LocationInterface } from '@angular-test/admin-panel/utils';

export const ADMIN_PANEL_LOCATIONS_CONST: { locations: LocationInterface[], centerLocation: LatLngInterface } = {
  locations: [
    {
      lat: 51.532172,
      id: '1',
      data: {
        title: 'Test Location 1'
      },
      lng: -0.148702
    },
    {
      lat: 51.522172,
      id: '2',
      data: {
        title: 'Test Location 2'
      },
      lng: -0.188702
    },
    {
      lat: 51.522172,
      id: '3',
      data: {
        title: 'Test Location 3'
      },
      lng: -0.118702
    },
    {
      lat: 51.512172,
      id: '4',
      data: {
        title: 'Test Location 4'
      },
      lng: -0.188702
    },
    {
      lat: 51.512172,
      id: '5',
      data: {
        title: 'Test Location 5'
      },
      lng: -0.138702
    }
  ],
  centerLocation: { lat: 51.512172, lng: -0.138702 }
};
