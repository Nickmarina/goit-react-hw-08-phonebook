import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/contacts-actions';
import useStyles from './styles';
import { getContacts } from '../../redux/contacts-selectors';

const Filter = () => {
  const classes = useStyles();
  const contacts = useSelector(getContacts);
  console.log(contacts.length);
  const dispatch = useDispatch();
  const handleFilter = e => dispatch(filterContacts(e.target.value));

  if (contacts.length > 0) {
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
