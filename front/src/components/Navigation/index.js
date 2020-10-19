// == Import npm
import React from 'react';

import './navigation.scss';

// == Composant
const Navigation = () => (
  <nav className="nav">
    <ul className="navigation-list">
      <li><a href="/" className="navigation-link">Accueil</a></li>
      <li><a href="/:slug" className="navigation-link">Alimentation</a></li>
      <li><a href="/:slug" className="navigation-link">Sport</a></li>
      <li><a href="/:slug" className="navigation-link">Bien-être</a></li>
      <li><a href="/tableaudebord" className="navigation-link">Tableau de bord</a></li>
    </ul>
  </nav>
);

// == Export
export default Navigation;
