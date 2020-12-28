import localStorage from 'localStorage';

/**
 * Get value from local storage.
 *
 * @param {String} key : name of key to get value.
 * @returns {String}
 */
export const get = (key) => localStorage.getItem(key);

/**
 * Set value to localStorage.
 *
 * @param {String} key : name of key to set value.
 * @param {*} value : value to set.
 */
export const set = (key, value) => localStorage.setItem(key, value);


/**
 * Removes value from localStorage.
 *
 * @param {string} key The key to remove.
 */
export const remove = (key) => localStorage.removeItem(key);
