import { User } from '../../models/user.model';

export interface AuthState {
  user: User | undefined;
  token: string | undefined;
  loading: boolean;
  loaded: boolean;
  signed: boolean;
  error: any;
}
