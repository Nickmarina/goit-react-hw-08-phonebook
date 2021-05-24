import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import {
  HomeView,
  RegisterView,
  LoginView,
  PhonebookView,
} from './services/routes';
import { pathes } from './services/pathes';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Header from './components/Header';
import { getCurrentUser } from './redux/auth/auth-operations';
import useStyles from './stylesApp';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <Header />
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path={pathes.home} exact component={HomeView} />
            <PublicRoute
              path={pathes.register}
              restricted
              component={RegisterView}
              redirectTo={pathes.contacts}
            />
            <PublicRoute
              path={pathes.login}
              restricted
              component={LoginView}
              redirectTo={pathes.contacts}
            />
            <PrivateRoute
              path={pathes.contacts}
              component={PhonebookView}
              redirectTo={pathes.login}
            />

            {/* {routes.map(({ path, label, exact, component: Component }) => (
              <Route
                key={label}
                path={path}
                exact={exact}
                component={Component}
              />
            ))} */}
          </Switch>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
