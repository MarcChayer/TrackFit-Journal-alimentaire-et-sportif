/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';

// component
import Navigation from 'src/components/Navigation';
import SearchBar from 'src/components/SearchBar';

// image
import logo from 'src/assets/images/logo.svg';

// == Import
import './header.scss';

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

      <div className="signin">
        <a href="/connexion" className="signin-link">
          <img src="http://paurtfolio.fr/apo/login.svg" alt="se connecter" className="signin-img" />
        </a>
      </div>
    </div>

  </header>
);

// == Export
export default Header;
