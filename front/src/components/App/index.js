/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';

import Header from 'src/components/Header';
import CreateAccount from 'src/containers/CreateAccount';
import Login from 'src/components/Login';
import Articles from 'src/components/Articles';
import OneArticle from 'src/components/Articles/OneArticle';
import Dashboard from 'src/components/Dashboard';
import Statistics from 'src/components/Statistics';
import Settings from 'src/components/Settings';

// == Composant
const App = () => (
  <div className="app">
    <Route path="/">
      <Header />
    </Route>
    <Route path="/inscription">
      <CreateAccount />
    </Route>
    <Route path="/connexion">
      <Login />
    </Route>
    <Route path="/articles">
      <Articles />
    </Route>
    <Route path="/article1">
      <OneArticle />
    </Route>
    <Route path="/tableaudebord">
      <Dashboard />
    </Route>
    <Route path="/statistiques">
      <Statistics />
    </Route>
    <Route path="/parametres">
      <Settings />
    </Route>
  </div>
);

// == Export
export default App;
