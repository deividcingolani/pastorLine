import { connect } from "react-redux";
import Contacts from "./components/Contacts";
import {
  getContacts,
  getUSContacts,
  getUSSearch,
  getSearch,
} from "./meta/actions";
import {
  selectStatus,
  selectContacts,
  selectContactsUS,
  selectStatusUS,
} from "./meta/selectors";

const mapStateToProps = (state) => ({
  contacts: selectContacts(state),
  status: selectStatus(state),
  contactsUS: selectContactsUS(state),
  statusUS: selectStatusUS(state),
});

const mapDispatchToProps = {
  getContacts,
  getUSContacts,
  getUSSearch,
  getSearch,
};

const ContactsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);

export default ContactsContainer;
