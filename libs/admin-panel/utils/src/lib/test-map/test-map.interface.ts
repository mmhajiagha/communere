export interface LatLngInterface {
  lat: number;
  lng: number;
}

export interface LocationInterface extends LatLngInterface {
  id: string;
  data: any;
}
