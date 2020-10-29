// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';

import Header from 'src/components/Header';
import CreateAccount from 'src/containers/CreateAccount';
import Login from 'src/containers/Login';
import Articles from 'src/containers/Articles';
// import OneArticle from 'src/components/Articles/OneArticle';
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
    <Route path="/articles/:slug">
      <Articles />
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
