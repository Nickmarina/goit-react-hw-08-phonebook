import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Navigation from '../Navigation';
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Navigation />
      <h1 className={classes.title}>
        Phonebook
        <ContactPhoneIcon className={classes.icon} fontSize="large" />
      </h1>
    </header>
  );
};

export default Header;
