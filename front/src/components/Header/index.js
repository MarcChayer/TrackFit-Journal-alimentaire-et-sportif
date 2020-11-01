// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// component
import Navigation from 'src/components/Navigation';
// import SearchBar from 'src/components/SearchBar';

// image
import logo from 'src/assets/images/logo.svg';

// == Import
import './header.scss';

// == Composant
const Header = ({
  isLogged,
  firstName,
  logoutHandler,
}) => {
  console.log(firstName);
  return (
    <header className="header">
      <div className="bloc-left">
        <NavLink
          to="/"
          exact
        >
          <img src={logo} alt="logoTrackFit" className="logo" />
        </NavLink>
      </div>
      <div className="navigation">
        <Navigation />
      </div>
      { isLogged
        ? (
          <div className="bloc-right">
            <NavLink to="/parametres" className="login-link">
              <p className="login-p">{firstName}</p>
            </NavLink>
            <NavLink to="/" className="logout-link">
              {/* <img src={logout} alt="se déconnecter" className="logout-img" /> */}
              <p className="logout-p" onClick={logoutHandler}>Déconnexion</p>
            </NavLink>
          </div>
        )
        : (
          <div className="bloc-right">
            <NavLink to="/connexion" className="login-link">
              <p className="login-p">Connexion</p>
            </NavLink>
            <NavLink to="/inscription" className="signup-link">
              <p className="signup-p">Inscription</p>
            </NavLink>
          </div>
        )}
    </header>
  );
};

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  firstName: PropTypes.string.isRequired,
  logoutHandler: PropTypes.func.isRequired,
};
// == Export
export default Header;
