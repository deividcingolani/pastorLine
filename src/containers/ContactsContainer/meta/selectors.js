import { initialState } from './reducer';
/**
 * Get contacts
 * @param state
 * @returns {Object}
 */
export const get = state => state.contacts || initialState;
