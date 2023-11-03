import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';
export const createUserAction = createAction(
  '[Set User]',
  props<{ user: User }>()
);
export const createUserActionSucess = createAction(
  '[Create User Success]',
  props<{ user: User }>()
);
export const createUserActionError = createAction(
  '[Set User Error]',
  props<{ error: any }>()
);
export const updateUserAction = createAction(
  '[Update User]',
  props<{ user: User }>()
);
export const updateUserActionSuccess = createAction(
  '[Update User Success]',
  props<{ user: User }>()
);
export const updateUserActionError = createAction(
  '[Update User Error]',
  props<{ error: any }>()
);
export const loginSession = createAction(
  '[Login User]',
  props<{ user: User }>()
);
export const loginSessionSuccess = createAction(
  '[Login User Success]',
  props<{ user: User }>()
);
export const loginSessionError = createAction(
  '[Login User Success]',
  props<{ error: any }>()
);
export const logoutSession = createAction('[Logout User]');
export const logoutSessionSuccess = createAction('[Logout User Success]');
export const logoutSessionError = createAction('[Logout User Erro]');
