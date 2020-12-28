import instance from './interceptor';

/**
 * Axios get method.
 *
 * @param {string} url
 * @returns {Promise}
 */
export const get = (url) => instance.get(url);

/**
* Axios post method.
*
* @param {string} url
* @param {object} payload
* @returns {Promise}
*/
export const post = (url, payload) => instance.post(url, payload);

/**
* Axios put method.
*
* @param {string} url
* @param {object} payload
* @returns {Promise}
*/
export const put = (url, payload) => instance.put(url, payload);

/**
* Axios post method.
*
* @param {string} url
* @returns {Promise}
*/
export const remove = (url) => instance.delete(url);

