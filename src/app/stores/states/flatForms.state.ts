import { FlatFormModel } from 'src/app/shared/models/flatForm.model';
import { FlatMarker } from 'src/app/shared/models/flatMarker.model';

export interface FlatFormsState {
  currentFlatForm: FlatFormModel | undefined;
  loaded: boolean;
  loading: boolean;
  error: any;
}
