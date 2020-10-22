// == Import npm
import React from 'react';

import CreateAccount from 'src/components/CreateAccount';
import Login from 'src/components/Login';
import Header from 'src/components/Header';



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
