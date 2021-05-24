import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contacts-actions';
import useStyles from './styles';
import { contacts } from '../../redux/contacts/contacts-selectors';

const Filter = () => {
  const classes = useStyles();
  const contactsList = useSelector(contacts);
  const dispatch = useDispatch();

  const handleFilter = e => dispatch(filterContacts(e.target.value));

  if (contactsList.length > 0) {
    return (
      <div>
        <h4 className={classes.title}>Find contacts by name</h4>
        <input
          className={classes.input}
          placeholder="Enter the name"
          type="text"
          onChange={handleFilter}
        ></input>
      </div>
    );
  }
  return <p className={classes.text}> The list is empty </p>;
};

export default Filter;
