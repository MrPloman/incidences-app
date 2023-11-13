import { FlatModel } from 'src/app/shared/models/flat.model';
import { FlatFormModel } from 'src/app/shared/models/flatForm.model';
import { FlatMarker } from 'src/app/shared/models/flatMarker.model';

export interface FlatFormsState {
  currentFlatForm: FlatModel | undefined;
  loaded: boolean;
  loading: boolean;
  error: any;
}
