// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.scss';
import profile from 'src/assets/images/icone-nav-profile.svg';
import hamburger from 'src/assets/images/icone-nav-burger.svg';
import statistics from 'src/assets/images/icone-nav-stat.svg';
// import Hamburger from 'src/components/Hamburger';

// == Composant
const Navigation = () => (
  <div className="navigation">
    <nav className="navigation--desktop">
      <ul className="navigation-list">
        <li><NavLink to="/" exact activeClassName="navigation-link--active" className="navigation-link">Accueil</NavLink></li>
        <li><NavLink to="/articles/alimentation" className="navigation-link" activeClassName="navigation-link--active">Alimentation</NavLink></li>
        <li><NavLink to="/articles/sport" className="navigation-link" activeClassName="navigation-link--active">Sport</NavLink></li>
        <li><NavLink to="/articles/bienetre" className="navigation-link" activeClassName="navigation-link--active">Bien-être</NavLink></li>
        <li><NavLink to="/tableaudebord" className="navigation-link" activeClassName="navigation-link--active">Tableau de bord</NavLink></li>
      </ul>
    </nav>

    <nav className="navigation--mobile">
      <ul className="navigation-list">
        <li className="navigation-link"><NavLink to="/tableaudebord"><img src={profile} alt="profile utilisateur" className="navigation--mobile-img" /></NavLink></li>
        <li className="navigation-link"><NavLink to="/statistiques"><img src={statistics} alt="statistiques utilisateur" className="navigation--mobile-img" /></NavLink></li>
        <li className="navigation-link"><NavLink to="/navigation"><img src={hamburger} alt="navigation" className="navigation--mobile-img" /></NavLink></li>
      </ul>
    </nav>
  </div>
);

// == Export
export default Navigation;
