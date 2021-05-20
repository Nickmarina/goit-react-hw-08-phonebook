import { useSelector } from 'react-redux';
import useStyles from './styles';
import ContactListItem from '../ContactListItem';
import { filteredContacts } from '../../redux/contacts-selectors';

const ContactList = () => {
  const classes = useStyles();
  const contacts = useSelector(filteredContacts);
  return (
    <ul className={classes.list}>
      {contacts.map(({ id }) => (
        <ContactListItem key={id} id={id} />
      ))}
    </ul>
  );
};

export default ContactList;
