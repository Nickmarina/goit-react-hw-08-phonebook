import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts-operations';
import useStyles from './styles';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import { getContactById } from '../../redux/contacts-selectors';

const ContactListItem = ({ id }) => {
  const classes = useStyles();
  const contacts = useSelector(getContactById(id));
  const { name, number } = contacts;
  const dispatch = useDispatch();
  const HandleDeleting = () => dispatch(deleteContact(id));

  return (
    <li className={classes.item} key={id}>
      {name}: <span className={classes.span}>{number}</span>
      <button className={classes.btn} type="button" onClick={HandleDeleting}>
        <PersonAddDisabledIcon fontSize="small" />
      </button>
    </li>
  );
};

export default ContactListItem;
