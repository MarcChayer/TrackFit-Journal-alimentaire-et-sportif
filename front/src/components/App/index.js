/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';

import Header from 'src/components/Header';
import CreateAccount from 'src/components/CreateAccount';
import Login from 'src/components/Login';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <CreateAccount />
    <Login />
  </div>
);

// == Export
export default App;
