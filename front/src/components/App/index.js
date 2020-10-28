/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';

import Header from 'src/components/Header';
import CreateAccount from 'src/containers/CreateAccount';
import Login from 'src/components/Login';
import Dashboard from 'src/components/Dashboard';
import Statistics from 'src/components/Statistics';
import Articles from 'src/containers/Articles';

// == Composant
const App = () => (
  <div className="app">
    <Route path="/">
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
    <Route path="/tableaudebord">
      <Header />
      <Dashboard />
      <Statistics />
    </Route>
    <Route path="/articles/:slug">
      <Header />
      <Articles />
    </Route>
  </div>
);

// == Export
export default App;
