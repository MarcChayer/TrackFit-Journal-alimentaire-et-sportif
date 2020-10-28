/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';

// component
import Navigation from 'src/components/Navigation';
import SearchBar from 'src/components/SearchBar';

// image
import logo from 'src/assets/images/logo.svg';
import login from 'src/assets/images/login.svg';

// == Import
import './header.scss';

// == Composant
const Header = () => (
  <header className="header">

    <a href="/"><img src={logo} alt="logoTrackFit" className="logo" /></a>

    <div className="navigation">
      <Navigation />
    </div>

    <div className="bloc-right">
      <div className="searchbar">
        <SearchBar />
      </div>

      <div className="signin">
        <a href="/connexion" className="signin-link">
          <img src={login} alt="se connecter" className="signin-img" />
        </a>
      </div>
    </div>

  </header>
);

// == Export
export default Header;
