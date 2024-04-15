import { FlatModel } from 'src/app/shared/models/flat.model';

export interface FlatFormsState {
  currentFlatForm: FlatModel | undefined;
  loaded: boolean;
  loading: boolean;
  error: unknown;
}
