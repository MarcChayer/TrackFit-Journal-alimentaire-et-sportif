// == Import npm
import React from 'react';

import Login from 'src/components/Login';
import Header from 'src/components/Header';


// == Composant
const App = () => (
  <div className="app">
    <Login />
    <Header />
  </div>
);

// == Export
export default App;
