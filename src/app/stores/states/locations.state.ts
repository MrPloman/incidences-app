import { FlatMarker } from 'src/app/shared/models/flatMarker.model';

export interface LocationsState {
  loading: boolean;
  loaded: boolean;
  markers: FlatMarker[];
  error: any;
}
