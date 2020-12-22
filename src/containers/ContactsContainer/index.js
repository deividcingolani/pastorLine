import { connect } from 'react-redux';
import Contacts from './components/contacts';
import {getContacts} from "./meta/actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    getContacts,
});

const ContactsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Contacts);

export default ContactsContainer;
