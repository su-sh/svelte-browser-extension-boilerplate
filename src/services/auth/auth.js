import axios from 'axios';

import config from '../../config';
import { clearAuthTokens } from '../token';

/**
 * Maps to token object.
 *
 * @param {Object} response
 * @returns {{accessToken: string, refreshToken: string}}
 */
const mapLoginResponse = response => ({
    accessToken: response.data.access_token,
    refreshToken: response.data.refresh_token,
});

/**
 * Login using the API and return JWT tokens.
 *
 * @param {Object} http
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{accessToken: string, refreshToken: string}>}
 */
export const login = async (email, password) => {
    try {
        const response = await axios.post(`${config.baseURL}/login`, {
            email,
            password
        });

        return mapLoginResponse(response);
    } catch (error) {
        throw error;
    }
}

/**
 * Logs out of the system.
 */
export const logout = async () => {
    await axios.get(`${config.baseURL}/logout`);

    clearAuthTokens();
}

/**
 * Refresh Access Token using the API.
 *
 * @param {string} refreshToken
 * @returns {Promise} A promise to a get request to get a new access token.
 */
export const refreshAccessToken = async (refreshToken) => {
    try {
        const response = await axios.post(`${config.baseURL}/oauth/access_token`, {
            refreshToken
        });

        return mapLoginResponse(response);
    } catch (error) {
        throw error;
    }
}
