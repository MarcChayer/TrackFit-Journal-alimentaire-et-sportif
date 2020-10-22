// == Import npm
import React from 'react';

import './style.scss';

// == Composant
const Navigation = () => (
  <div className="navigation">
    <nav className="navigation--desktop">
      <ul className="navigation-list">
        <li><a href="/" className="navigation-link">Accueil</a></li>
        <li><a href="/:slug" className="navigation-link">Alimentation</a></li>
        <li><a href="/:slug" className="navigation-link">Sport</a></li>
        <li><a href="/:slug" className="navigation-link">Bien-être</a></li>
        <li><a href="/tableaudebord" className="navigation-link">Tableau de bord</a></li>
      </ul>
    </nav>

    <nav className="navigation--mobile">
      <ul className="navigation-list">
        <li className="navigation-link"><a href="#"><img src="http://paurtfolio.fr/apo/profile.svg" alt="profile utilisateur" className="navigation--mobile-img"/></a></li>
        <li className="navigation-link"><a href="#"><img src="http://paurtfolio.fr/apo/statistics.svg" alt="statistiques utilisateur" className="navigation--mobile-img"/></a></li>
        <li className="navigation-link"><a href="#"><img src="http://paurtfolio.fr/apo/toggle.svg" alt="navigation" className="navigation--mobile-img"/></a></li>
      </ul>
    </nav>
  </div>
);

// const Menu = () => (

// );
// == Export
export default Navigation;
