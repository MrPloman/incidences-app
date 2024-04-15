import { FlatMarker } from 'src/app/shared/models/flatMarker.model';

export interface LocationsState {
  loading: boolean;
  loaded: boolean;
  markers: FlatMarker[];
  currentPosition: { lat: number | null; lng: number | null };
  error: unknown;
}
