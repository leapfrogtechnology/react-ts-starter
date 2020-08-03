import { AuthActionTypes, AuthAction } from 'types';

const INITIAL_STATE = {
  isLoggedIn: false,
  isLoggingIn: false,
  user: {},
};

export default function (authState = INITIAL_STATE, action: AuthAction) {
  switch (action.type) {
    case AuthActionTypes.SET_LOGGING_IN:
      return {
        ...authState,
        isLoggingIn: action.data,
      };

    case AuthActionTypes.SET_IS_LOGGED_IN:
      return {
        ...authState,
        isLoggedIn: action.data,
      };

    case AuthActionTypes.SET_LOGGED_IN_USER:
      return {
        ...authState,
        user: action.data,
      };

    default:
      return authState;
  }
}
