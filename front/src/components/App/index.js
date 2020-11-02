// == Import npm
import React from 'react';
import {
  Route,
  Switch,
  useLocation,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from 'src/containers/Header';
import Home from 'src/components/Home';
import CreateAccount from 'src/containers/CreateAccount';
import Login from 'src/containers/Login';
import Articles from 'src/containers/Articles';
import Dashboard from 'src/containers/Dashboard';
import Statistics from 'src/components/Statistics';
import Settings from 'src/components/Settings';
import NotFound from 'src/components/NotFound';

// == Composant
const App = ({
  isLogged,
  justSubscribe,
}) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        {!isLogged && justSubscribe && location.pathname === '/inscription'
        && (
        <Redirect to="/connexion" />
        )}
        {!isLogged
        && (
        <Route path="/inscription">
          <Header />
          <CreateAccount />
        </Route>
        )}
        {!isLogged
        && (
        <Route path="/connexion">
          <Header />
          <Login />
        </Route>
        )}
        <Route path="/articles/:slug">
          <Header />
          <Articles />
        </Route>
        <Route path="/tableaudebord">
          <Header />
          <Dashboard />
        </Route>
        <Route path="/statistiques">
          <Header />
          <Statistics />
        </Route>
        <Route path="/parametres">
          <Header />
          <Settings />
        </Route>
        <Route path="*">
          <Header />
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};
App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default App;
