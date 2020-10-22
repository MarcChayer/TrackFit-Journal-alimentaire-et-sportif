/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';

// component
import Navigation from 'src/components/Navigation';
import SearchBar from 'src/components/SearchBar';

// image
import logo from 'src/assets/images/logo.svg';

// == Import
import './style.scss';

// == Composant
const Header = () => (
  <header className="header">

    <img src={logo} alt="logoTrackFit" className="logo" />

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
