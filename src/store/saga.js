import { all } from "redux-saga/effects";
import ContactsContainer from "../containers/ContactsContainer/meta/saga.js";

export default function* saga() {
  yield all([ContactsContainer()]);
}
