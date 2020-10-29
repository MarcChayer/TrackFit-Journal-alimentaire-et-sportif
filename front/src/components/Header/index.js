/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';

// component
import Navigation from 'src/components/Navigation';
// import SearchBar from 'src/components/SearchBar';

// image
import logo from 'src/assets/images/logo.svg';
import login from 'src/assets/images/login.svg';
import signup from 'src/assets/images/signup.svg';
import logout from 'src/assets/images/logout.svg';

// == Import
import './header.scss';

// == Composant
const Header = () => (
  <header className="header">

    <div className="bloc-left">
      <a href="/"><img src={logo} alt="logoTrackFit" className="logo" /></a>
    </div>

    <div className="navigation">
      <Navigation />
    </div>

    <div className="bloc-right">
      <a href="/connexion" className="login-link">
        {/*<img src={login} alt="se connecter" className="login-img" />*/}
        <p className="login-p">Connexion</p>
      </a>
      <a href="/inscription" className="signup-link">
        {/*<img src={signup} alt="s'inscrire" className="signup-img" />*/}
        <p className="signup-p">Inscription</p>
      </a>
      {/*<a href="/deconnexion" className="logout-link">
        <img src={logout} alt="se déconnecter" className="logout-img" />
        <p className="logout-p">Déconnexion</p>
      </a>*/}
    </div>

  </header>
);

// == Export
export default Header;
