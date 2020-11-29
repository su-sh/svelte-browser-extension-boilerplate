import axios from 'axios';

import config from '../config';
import {refreshAccessToken} from '../services/auth/auth';
import { getAuthTokens,setAccessToken } from '../services/token';

const instance = axios.create({
    baseURL: config.baseURL,
    responseType: 'json'
  });

/**
 * Axios request interceptor.
 */
instance.interceptors.request.use(
    async requestConfig => {
        const { accessToken, refreshToken } = getAuthTokens();

        if (accessToken) {
            return configWithAccessToken(requestConfig, accessToken);
        }

        if (!refreshToken) {
            return requestConfig;
        }

        const newAccessToken = await refreshAccessToken(refreshToken);

        setAccessToken(newAccessToken);

        return configWithAccessToken(requestConfig, newAccessToken);
    },
    requestError => {
        throw requestError;
    }
);

/**
 * Add access token in the authorization header of the given config.
 *
 * @param {Object} config Axios config object.
 * @param {string} accessToken
 * @returns {Object} Axios config object.
 */
const configWithAccessToken = (config, accessToken) => ({
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });

//TODO: Axios Response Interceptor that handles 403 and 401 request failures.

export default instance;
