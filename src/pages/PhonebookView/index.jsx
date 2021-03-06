import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-operations';
import { contacts } from '../../redux/contacts/contacts-selectors';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import useStyles from './styles';

const PhonebookView = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts(contacts));
  }, [dispatch]);

  return (
    <div className={classes.main}>
      <ContactForm />
      <h2 className={classes.contactsTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default PhonebookView;
