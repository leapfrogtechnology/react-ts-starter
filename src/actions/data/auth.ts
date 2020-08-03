export enum AuthActionTypes {
  SET_LOGGING_IN = 'SET_LOGGING_IN',
  SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN',
  SET_LOGGED_IN_USER = 'SET_IS_LOGGED_IN',
}

export interface AuthAction {
  data: boolean;
  type: AuthActionTypes;
}

/**
 * Action creator for changing loading state for login.
 *
 * @param {boolean} isLoggingIn
 * @returns {object}
 */
export function setLoggingIn(isLoggingIn: boolean): AuthAction {
  return {
    data: isLoggingIn,
    type: AuthActionTypes.SET_LOGGING_IN,
  };
}

/**
 * Action creator for changing logged in state.
 *
 * @param {boolean} isLoggedIn
 * @returns {object}
 */
export function setIsLoggedIn(isLoggedIn: boolean): AuthAction {
  return {
    data: isLoggedIn,
    type: AuthActionTypes.SET_IS_LOGGED_IN,
  };
}

/**
 * Action creator for saving logged in user.
 *
 * @param {object} user
 * @returns {object}
 */
export function setLoggedInUser(user: any): AuthAction {
  return {
    data: user,
    type: AuthActionTypes.SET_LOGGED_IN_USER,
  };
}
