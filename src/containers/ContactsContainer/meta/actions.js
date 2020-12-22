import * as constants from "./constants";

export const getContacts = (payload) => ({
  type: constants.GET_CONTACTS,
  payload,
});

export const getContactsSuccess = (payload) => ({
  type: constants.GET_CONTACTS_SUCCESS,
  payload,
});

export const getContactsPending = (payload) => ({
  type: constants.GET_CONTACTS_PENDING,
});

export const getContactsError = (payload) => ({
  type: constants.GET_CONTACTS_ERROR,
  payload,
});

export const getUSContacts = (payload) => ({
  type: constants.GET_US_CONTACTS,
  payload,
});

export const getUSContactsSuccess = (payload) => ({
  type: constants.GET_US_CONTACTS_SUCCESS,
  payload,
});

export const getUSContactsError = (payload) => ({
  type: constants.GET_US_CONTACTS_ERROR,
  payload,
});

export const getUSContactsPending = (payload) => ({
  type: constants.GET_US_CONTACTS_PENDING,
});

export const getSearch = (payload) => ({
  type: constants.GET_CONTACTS_SEARCH,
  payload,
});

export const getSearchSuccess = (payload) => ({
  type: constants.GET_CONTACTS_SEARCH_SUCCESS,
  payload,
});

export const getSearchError = (payload) => ({
  type: constants.GET_CONTACTS_SEARCH_ERROR,
  payload,
});

export const getSearchPending = (payload) => ({
  type: constants.GET_CONTACTS_SEARCH_PENDING,
});

export const getUSSearch = (payload) => ({
  type: constants.GET_US_CONTACTS_SEARCH,
  payload,
});
export const getUSSearchSuccess = (payload) => ({
  type: constants.GET_US_CONTACTS_SEARCH_SUCCESS,
  payload,
});

export const getUSSearchError = (payload) => ({
  type: constants.GET_US_CONTACTS_SEARCH_ERROR,
  payload,
});

export const getUSSearchPending = (payload) => ({
  type: constants.GET_US_CONTACTS_SEARCH_PENDING,
});
