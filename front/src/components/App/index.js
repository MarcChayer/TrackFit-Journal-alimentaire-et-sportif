/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';

import Header from 'src/components/Header';
import CreateAccount from 'src/components/CreateAccount';
import Login from 'src/components/Login';
// import Dashboard from 'src/components/Dashboard';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Route path="/inscription">
      <CreateAccount />
    </Route>
    <Route path="/connexion">
      <Login />
    </Route>
    {/* <Route path="/tableaudebord">
      <Dashboard />
    </Route> */}
  </div>
);

// == Export
export default App;
