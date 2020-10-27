// == Import npm
import React from 'react';

import './navigation.scss';
import profile from 'src/assets/images/profile.svg';
import burger from 'src/assets/images/icones/icone-burger.svg';
import statistics from 'src/assets/images/icones/icone-statistics.svg';

// == Composant
const Navigation = () => (
  <div className="navigation">
    <nav className="navigation--desktop">
      <ul className="navigation-list">
        <li><a href="/" className="navigation-link">Accueil</a></li>
        <li><a href="/articles/alimentation" className="navigation-link">Alimentation</a></li>
        <li><a href="/articles/sport" className="navigation-link">Sport</a></li>
        <li><a href="/articles/bien-etre" className="navigation-link">Bien-être</a></li>
        <li><a href="/tableaudebord" className="navigation-link">Tableau de bord</a></li>
      </ul>
    </nav>

    <nav className="navigation--mobile">
      <ul className="navigation-list">
        <li className="navigation-link"><a href="#"><img src={profile} alt="profile utilisateur" className="navigation--mobile-img"/></a></li>
        <li className="navigation-link"><a href="#"><img src={statistics} alt="statistiques utilisateur" className="navigation--mobile-img"/></a></li>
        <li className="navigation-link"><a href="#"><img src={burger} alt="navigation" className="navigation--mobile-img"/></a></li>
      </ul>
    </nav>
  </div>
);

// const Menu = () => (

// );
// == Export
export default Navigation;
