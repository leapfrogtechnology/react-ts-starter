import * as storage from '../utils/storage';

import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants/storage';

interface PersistParams {
  accessToken: string;
  refreshToken: string;
}

/**
 * Persist token to storage.
 *
 * @param {{accessToken, refreshToken}} params
 */
export function persist({ accessToken, refreshToken }: PersistParams) {
  setAccessToken(accessToken);
  setRefreshToken(refreshToken);
}

/**
 * Get access token from storage.
 *
 * @returns {string}
 */
export function getAccessToken() {
  return storage.get(ACCESS_TOKEN);
}

/**
 * Set access token to storage.
 *
 * @param {string} accessToken
 */
export function setAccessToken(accessToken: string) {
  storage.set(ACCESS_TOKEN, accessToken);
}

/**
 * Get refresh token from storage.
 *
 * @returns {string}
 */
export function getRefreshToken() {
  return storage.get(REFRESH_TOKEN);
}

/**
 * Set refresh token to storage.
 *
 * @param {string} refreshToken
 * @returns {string}
 */
export function setRefreshToken(refreshToken: string) {
  return storage.set(REFRESH_TOKEN, refreshToken);
}

/**
 * Clear tokens.
 */
export function clear() {
  storage.clear();
}
