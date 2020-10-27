/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';

import Header from 'src/components/Header';
import CreateAccount from 'src/containers/CreateAccount';
import Login from 'src/components/Login';
import Dashboard from 'src/components/Dashboard';
import Statistics from 'src/components/Statistics';
import Articles from 'src/components/Articles';


// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Route path="/">
      <Header />
    </Route>
    <Route path="/inscription">
      <CreateAccount />
    </Route>
    <Route path="/connexion">
      <Login />
    </Route>
    <Route path="/tableaudebord">
      <Dashboard />
    </Route>
    <Route path="/statistiques">
      <Statistics />
    </Route>
    <Route path="/articles">
      <Articles />
    </Route>
  </div>
);

// == Export
export default App;
