import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './services/routes';
import Header from './components/Header';
import useStyles from './stylesApp';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />

      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          {routes.map(({ path, label, component: Component }) => (
            <Route key={label} path={path} componemt={Component} />
          ))}
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
