// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'src/components/Header';
import CreateAccount from 'src/containers/CreateAccount';
import Login from 'src/containers/Login';
import Articles from 'src/containers/Articles';
import Dashboard from 'src/containers/Dashboard';
import Statistics from 'src/components/Statistics';
import Settings from 'src/components/Settings';
import NotFound from 'src/components/NotFound';

// == Composant
const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/">
        <Header />
      </Route>
      <Route path="/inscription">
        <Header />
        <CreateAccount />
      </Route>
      <Route path="/connexion">
        <Header />
        <Login />
      </Route>
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

// == Export
export default App;
