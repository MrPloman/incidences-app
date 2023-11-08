import { FlatMarker } from 'src/app/models/flatMarker.model';

export interface LocationsState {
  loading: boolean;
  loaded: boolean;
  markers: FlatMarker[];
  error: any;
}
