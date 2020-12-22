import { takeEvery, put, call } from "redux-saga/effects";
import * as constants from "./constants";
import * as actions from "./actions";
import network from "../../../utils/network";

function* handleGetContacts(action) {
  yield put(actions.getContactsPending());
  try {
    const actionCall = "api/contacts.json";
    const params = {
      companyId: "171",
      page: action.payload,
    };

    const { contacts } = yield call(network.getData, actionCall, params);
    yield put(actions.getContactsSuccess({ contacts }));
  } catch (error) {
    yield put(actions.getContactsError(error));
  }
}
function* handleGetContactsSearch(action) {
  yield put(actions.getSearchPending());
  try {
    const actionCall = "api/contacts.json";
    const params = {
      companyId: "171",
      page: action.payload.page,
      query: action.payload.search,
    };

    const { contacts } = yield call(network.getData, actionCall, params);
    yield put(actions.getSearchSuccess({ contacts }));
  } catch (error) {
    yield put(actions.getSearchError(error));
  }
}

function* handleGetUSContacts(action) {
  yield put(actions.getUSContactsPending());
  try {
    const actionCall = "api/contacts.json";
    const params = {
      companyId: "171",
      page: action.payload,
      countryId: 226,
    };

    const { contacts } = yield call(network.getData, actionCall, params);

    yield put(actions.getUSContactsSuccess({ contacts }));
  } catch (error) {
    yield put(actions.getUSContactsError(error));
  }
}

function* handleGetUSContactsSearch(action) {
  yield put(actions.getUSSearchPending());
  try {
    const actionCall = "api/contacts.json";
    const params = {
      companyId: "171",
      countryId: 226,
      page: action.payload.page,
      query: action.payload.search,
    };

    const { contacts } = yield call(network.getData, actionCall, params);

    yield put(actions.getUSSearchSuccess(contacts));
  } catch (error) {
    yield put(actions.getUSSearchError(error));
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
  yield takeEvery(constants.GET_CONTACTS, handleGetContacts);
  yield takeEvery(constants.GET_US_CONTACTS, handleGetUSContacts);
  yield takeEvery(constants.GET_US_CONTACTS_SEARCH, handleGetUSContactsSearch);
  yield takeEvery(constants.GET_CONTACTS_SEARCH, handleGetContactsSearch);
}
