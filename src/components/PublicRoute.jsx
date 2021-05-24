import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../redux/auth/auth-selectors';

const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isLogin = useSelector(isAuthenticated);
  return (
    <Route
      {...routeProps}
      render={props =>
        isLogin && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
