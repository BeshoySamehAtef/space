import { User } from '../../_models/userAuth.model';
import { AuthActions, AuthActionTypes } from './auth.actions';

export interface AuthState {
  user: User | null;
  error: any | null;
}

export const initialState: AuthState = {
  user: null,
  error: null,
};

export function authReducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
      return {
        ...state,
        user: action.payload,
        error: null,
      };

    case AuthActionTypes.LoginFailure:
      return {
        ...state,
        user: null,
        error: action.payload.error.error,
      };

    case AuthActionTypes.Logout:
      return {
        ...state,
        user: null,
        error: null,
      };

    default:
      return state;
  }
}