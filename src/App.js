import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { routes } from './services/routes';
import useStyles from './stylesApp';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            {routes.map(({ path, label, exact, component: Component }) => (
              <Route
                key={label}
                path={path}
                exact={exact}
                component={Component}
              />
            ))}
          </Switch>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
