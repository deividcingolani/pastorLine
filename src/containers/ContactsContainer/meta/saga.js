import { all, takeLatest, put } from 'redux-saga/effects';
import * as constants from "./constants";
import * as actions from "./actions";

function* handleGetContacts(action) {
    try {
        yield put(actions.getContactsSuccess())
    } catch(error) {
        yield put(actions.getContactsError(error))
    }
}

export default function*() {
    yield all([
        yield takeLatest(constants.GET_CONTACTS, handleGetContacts),
    ]);
}
