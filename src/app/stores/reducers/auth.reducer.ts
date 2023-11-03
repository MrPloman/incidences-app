import { createReducer, on } from '@ngrx/store';
import { AuthState } from '../states/auth.state';
import {
  createUserAction,
  createUserActionError,
  createUserActionSucess,
} from '../actions/auth.actions';
export const initialAuthState: AuthState = {
  user: undefined,
  loading: false,
  loaded: false,
  error: undefined,
  token: undefined,
  signed: false,
};
export const _authReducers = createReducer(
  initialAuthState,
  on(createUserAction, (state, { user }) => ({
    user: undefined,
    loading: true,
    loaded: false,
    error: undefined,
    token: undefined,
    signed: false,
  })),
  on(createUserActionSucess, (state, { user }) => ({
    user: user,
    loading: false,
    loaded: true,
    error: undefined,
    token: user.token ? user.token : undefined,
    signed: true,
  })),
  on(createUserActionError, (state, { error }) => ({
    user: undefined,
    loading: false,
    loaded: false,
    error: error,
    token: undefined,
    signed: false,
  }))
  // on(newWHATEVERActionSuccess, (state, { PARAM1, PARAM2, PARAM3 }) => {...state, loaded: true, loading: false, DATA: [...state.DATA, new MODEL(PARAM1, PARAM2, PARAM3)]}),
  // on(newWHATEVERActionError, (state, error) => {loaded: false, loading: false, DATA: [], error: error}),
  // on(editWHATEVERAction, (state, { PARAM1, PARAM2, PARAM3 }) => {...state, loaded: false, loading: true}),
  // on(editWHATEVERActionSuccess, (state, { PARAM1, PARAM2, PARAM3 }) => {...state, loaded: true, loading: false, DATA: state.DATA.map((element) => {
  //   if (element.PARAM1 === PARAM1) {
  //     element.PARAM2 = PARAM2
  //   }
  //   return element;
  // }}
  // on(editWHATEVERActionError, (state, error) => {DATA: [], loaded: false, loading: true, error: error}),
);
export function authReducers(state: any, action: any) {
  return _authReducers(state, action);
}
