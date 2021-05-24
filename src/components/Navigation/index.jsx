import { NavLink } from 'react-router-dom';
import { pathes } from '../../services/pathes';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import useStyles from './styles';

const Navigation = () => {
  const classes = useStyles();
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
        <NavLink
          to={pathes.contacts}
          className={classes.link}
          activeClassName={classes.linkActive}
        >
          Contacts
        </NavLink>
      </div>
      <AuthNav />
      {/* <UserMenu/> */}
    </div>
  );
};

export default Navigation;
