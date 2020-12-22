import * as constants from "./constants";


export const getContacts = () => ({
    type: constants.GET_CONTACTS,
});

export const getContactsSuccess = payload => ({
    type: constants.GET_CONTACTS_SUCCESS,
    payload,
});

export const getContactsError = payload => ({
    type: constants.GET_CONTACTS_ERROR,
    payload,
});
