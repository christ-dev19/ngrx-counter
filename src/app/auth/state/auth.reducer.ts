import { loginSuccess, signupSuccess, autoLogout } from './auth.actions';
import {Action, ActionReducer, createReducer, on} from '@ngrx/store';
import {AuthState, initialState} from './auth.state';

const authReducer: ActionReducer<AuthState, Action> = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(signupSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(autoLogout, (state) => {
    return {
      ...state,
      user: null,
    };
  })
);

export function AuthReducer(state, action): AuthState {
  return authReducer(state, action);
}
