// == Import npm
import React from 'react';

import './toggle.scss';

// == Composant
const Toggle = () => (
  <div className="menuToggle">
    <input type="checkbox" />
    <span />
    <span />
    <span />
    <ul className="nav__hamburger">
      <li><a href="/" className="nav__hamburger__menu">Accueil</a></li>
      <li><a href="/articles" className="nav__hamburger__menu">Alimentation</a></li>
      <li><a href="/articles" className="nav__hamburger__menu">Sport</a></li>
      <li><a href="/articles" className="nav__hamburger__menu">Bien-être</a></li>
      <li><a href="/tableaudebord" className="nav__hamburger__menu">Tableau de bord</a></li>
      <li><a href="/deconnexion" className="nav__hamburger__menu">Déconnexion</a></li>
    </ul>
  </div>
);

// == Export
export default Toggle;
