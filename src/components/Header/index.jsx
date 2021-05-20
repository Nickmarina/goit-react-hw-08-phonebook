import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();

  return (
    <h1 className={classes.title}>
      Phonebook
      <ContactPhoneIcon className={classes.icon} fontSize="large" />
    </h1>
  );
};

export default Header;
