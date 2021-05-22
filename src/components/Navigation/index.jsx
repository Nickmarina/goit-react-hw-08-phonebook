import { NavLink } from 'react-router-dom';
import { pathes } from '../../services/pathes';
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
      <div>
        <NavLink
          to={pathes.register}
          className={classes.link}
          activeClassName={classes.linkActive}
        >
          Register
        </NavLink>
        <NavLink
          to={pathes.login}
          className={classes.link}
          activeClassName={classes.linkActive}
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
