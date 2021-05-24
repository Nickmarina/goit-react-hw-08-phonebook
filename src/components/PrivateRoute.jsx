import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../redux/auth/auth-selectors';
import { pathes } from '../services/pathes';

const PrivateRoute = props => {
  const isLogin = useSelector(isAuthenticated);

  return isLogin ? <Route {...props} /> : <Redirect to={pathes.home} />;
};

export default PrivateRoute;
