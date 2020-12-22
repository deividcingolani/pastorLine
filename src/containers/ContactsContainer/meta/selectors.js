import { initialState } from "./reducer";
/**
 * Get contacts
 * @param state
 * @returns {Object}
 */
export const select = (state) => state.ContactsContainer || initialState;

export const selectStatus = (state) => select(state).status;
export const selectContacts = (state) => select(state).contacts;
export const selectContactsUS = (state) => select(state).contactsUS;
export const selectStatusUS = (state) => select(state).statusUS;
