// == Import npm
import React from 'react';

import Navigation from 'src/components/Navigation';
import SearchBar from 'src/components/SearchBar';

// == Import
import './header.scss';

// == Composant
const Header = () => (
  <header className="header">

    <img src="http://paurtfolio.fr/apo/logo.svg" alt="logo" className="logo" />

    <div className="navigation">
      <Navigation />
    </div>

    <div className="bloc-right">
      <div className="searchbar">
        <SearchBar />
      </div>

      <div className="login">
        <a href="/login" className="login-link">
          <img src="http://paurtfolio.fr/apo/login.svg" alt="se connecter" className="login-img" />
        </a>
      </div>
    </div>

  </header>
);

// == Export
export default Header;
