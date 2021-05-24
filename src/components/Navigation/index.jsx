import { NavLink } from 'react-router-dom';
import { pathes } from '../../services/pathes';
// import {useEffect} from 'react';
import { isAuthenticated } from '../../redux/auth/auth-selectors';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import useStyles from './styles';

const Navigation = () => {
  const classes = useStyles();

  // const isAuthenticated =()=> Boolean(token);
  // useEffect((isAuthenticated)=>{},token);

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
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
      {/* <AuthNav/ > */}
    </div>
  );
};

export default Navigation;
