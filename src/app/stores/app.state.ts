import { AuthState } from './states/auth.state';
import { LocationsState } from './states/locations.state';
import { UILoadingState } from './states/UIloading.state';

export interface AppState {
  UILoadingState: UILoadingState;
  AuthState: AuthState;
  LocationsState: LocationsState;
}
