import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { pathes } from '../../services/pathes';
import { isAuthenticated } from '../../redux/auth/auth-selectors';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import useStyles from './styles';

const Navigation = () => {
  const classes = useStyles();

  const authenticated = useSelector(isAuthenticated);
  return (
    <div className={classes.nav}>
      <div>
        <NavLink
          exact
          to={pathes.home}
          className={classes.link}
          activeClassName={classes.linkActive}
        >
          Home
        </NavLink>
        {authenticated ? (
          <NavLink
            to={pathes.contacts}
            className={classes.link}
            activeClassName={classes.linkActive}
          >
            Contacts
          </NavLink>
        ) : null}
      </div>
      {authenticated ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default Navigation;
