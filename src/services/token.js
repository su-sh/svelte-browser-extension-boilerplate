import * as constant from '../constant/constant';
import { get, set, remove } from '../utils/storage';

/**
 * Gets access and refresh token from storage.
 *
 * @returns {Object}
 */
export const getAuthTokens = () => ({
    accessToken: get(constant.ACCESS_TOKEN),
    refreshToken: get(constant.REFRESH_TOKEN)
});

/**
 * Sets the auth tokens to storage.
 *
 * @param {string} accessToken
 */
export const setAuthTokens = (accessToken, refreshToken) => {
    set(constant.ACCESS_TOKEN, accessToken);
    set(constant.REFRESH_TOKEN, refreshToken);
};

/**
 * Sets the access token to storage.
 *
 * @param {string} accessToken
 */
export const setAccessToken = accessToken => {
    set(constant.ACCESS_TOKEN, accessToken);
};

/**
 * Removes auth tokens from storage.
 */
export const clearAuthTokens = () => {
    remove(constant.ACCESS_TOKEN);
    remove(constant.REFRESH_TOKEN);
};
