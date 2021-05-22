import { NavLink } from 'react-router-dom';
import { pathes } from '../../services/pathes';
import useStyles from '../Navigation/styles';

const AuthNav = () => {
  const classes = useStyles();
  return (
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
  );
};

export default AuthNav;
