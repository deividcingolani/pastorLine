import produce from "immer";
import * as constants from "./constants";
import { REQUEST_STATES } from "../../../constants";

export const initialState = {
  contacts: [],
  status: null,
  contactsUS: [],
  statusUS: null,
};

/* eslint-disable no-param-reassign */
const contacts = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constants.GET_CONTACTS_PENDING:
        draft.status = REQUEST_STATES.PENDING;
        break;
      case constants.GET_CONTACTS_SUCCESS:
        action.payload.contacts = {
          ...state.contacts.contacts,
          ...action.payload.contacts,
        };
        draft.contacts = action.payload;
        draft.status = REQUEST_STATES.SUCCESS;
        break;
      case constants.GET_CONTACTS_ERROR:
        draft.status = REQUEST_STATES.ERROR;
        break;
      case constants.GET_US_CONTACTS_PENDING:
        draft.statusUS = REQUEST_STATES.PENDING;
        break;
      case constants.GET_US_CONTACTS_SUCCESS:
        action.payload.contacts = {
          ...state.contactsUS.contacts,
          ...action.payload.contacts,
        };
        draft.contactsUS = action.payload;
        draft.statusUS = REQUEST_STATES.SUCCESS;
        break;
      case constants.GET_US_CONTACTS_SEARCH_SUCCESS:
        draft.contactsUS = action.payload;
        break;
      case constants.GET_CONTACTS_SEARCH_SUCCESS:
        draft.contacts = action.payload;
        break;

      case constants.GET_US_CONTACTS:
        draft.contacts = action.payload;
        draft.statusUS = REQUEST_STATES.SUCCESS;
        break;
      case constants.GET_US_CONTACTS_ERROR:
        draft.statusUS = REQUEST_STATES.ERROR;
        break;
      default:
        break;
    }
  });

export default contacts;
