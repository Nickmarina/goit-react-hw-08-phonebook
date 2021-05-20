import axios from 'axios';
import * as actions from './contacts-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/users';

export const getContacts = () => (dispatch, getState) => {
  dispatch(actions.getContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.getContactsSuccess(data)))
    .catch(error => dispatch(actions.getContactsError(error)));
};

export const addContact = contact => (dispatch, getState) => {
  dispatch(actions.addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

export const deleteContact = contactId => (dispatch, getState) => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};
