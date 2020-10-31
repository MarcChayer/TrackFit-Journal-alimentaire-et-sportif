// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.scss';
import profile from 'src/assets/images/profile.svg';
import statistics from 'src/assets/images/icones/icone-statistics.svg';

// == Composant
const Navigation = () => (
  <div className="navigation">
    <nav className="navigation--desktop">
      <ul className="navigation-list">
        <li><NavLink to="/" className="navigation-link">Accueil</NavLink></li>
        <li><NavLink to="/articles/alimentation" className="navigation-link">Alimentation</NavLink></li>
        <li><NavLink to="/articles/sport" className="navigation-link">Sport</NavLink></li>
        <li><NavLink to="/articles/bienetre" className="navigation-link">Bien-être</NavLink></li>
        <li><NavLink to="/tableaudebord" className="navigation-link">Tableau de bord</NavLink></li>
      </ul>
    </nav>

    <nav className="navigation--mobile">
      <ul className="navigation-list">
        <li className="navigation-link"><NavLink to="/tableaudebord"><img src={profile} alt="profile utilisateur" className="navigation--mobile-img" /></NavLink></li>
        <li className="navigation-link"><NavLink to="/statistiques"><img src={statistics} alt="statistiques utilisateur" className="navigation--mobile-img" /></NavLink></li>
        <li className="navigation-link">  </li>
      </ul>
    </nav>
  </div>
);

// == Export
export default Navigation;
