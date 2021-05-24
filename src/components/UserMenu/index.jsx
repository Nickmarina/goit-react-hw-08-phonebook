import { useDispatch } from 'react-redux';
import { userName } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import useStyles from './styles';

const UserMenu = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <div className={classes.container}>
      <span className={classes.title}>Hello, One {userName}</span>
      <button className={classes.btn} type="button" onClick={onLogout}>
        <span className={classes.btnText}>Logout</span>
        <ExitToAppIcon />
      </button>
    </div>
  );
};

export default UserMenu;
