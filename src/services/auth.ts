import http from 'utils/http';

import config from 'config';

import * as tokenService from './token';

interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * Send http request for login.
 *
 * @param {{email, password}} payload
 * @returns {Promise<{accessToken, refreshToken}>}
 */
export async function login({ email, password }: LoginCredentials) {
  const url = config.endpoints.auth.login;
  const { data } = await http.post(url, {
    email,
    password,
  });

  return data;
}

/**
 * Log out of the system.
 *
 * @param {string} refreshToken
 */
export async function logout(refreshToken?: string) {
  tokenService.clear();
}

/**
 * Refresh access token.
 *
 * @param {string} refreshToken
 * @returns {Promise<{accessToken, refreshToken}>}
 */
export async function refresh(refreshToken: string) {
  const url = config.endpoints.auth.refresh;

  const { data } = await http.post(url, { refreshToken });

  return data;
}
