// == Import npm
import React from 'react';

import './navigation.scss';
import profile from 'src/assets/images/profile.svg';
import hamburger from 'src/assets/images/icones/icone-nav-burger.svg';
import statistics from 'src/assets/images/icones/icone-nav-stat.svg';
// import Hamburger from 'src/components/Hamburger';

// == Composant
const Navigation = () => (
  <div className="navigation">
    <nav className="navigation--desktop">
      <ul className="navigation-list">
        <li><a href="/" className="navigation-link">Accueil</a></li>
        <li><a href="/articles/alimentation" className="navigation-link">Alimentation</a></li>
        <li><a href="/articles/sport" className="navigation-link">Sport</a></li>
        <li><a href="/articles/bienetre" className="navigation-link">Bien-être</a></li>
        <li><a href="/tableaudebord" className="navigation-link">Tableau de bord</a></li>
      </ul>
    </nav>

    <nav className="navigation--mobile">
      <ul className="navigation-list">
        <li className="navigation-link"><a href="/tableaudebord"><img src={profile} alt="profile utilisateur" className="navigation--mobile-img navigation--mobile-img-border" /></a></li>
        <li className="navigation-link"><a href="/statistiques"><img src={statistics} alt="statistiques utilisateur" className="navigation--mobile-img" /></a></li>
        <li className="navigation-link"><a href="/navigation"><img src={hamburger} alt="navigation" className="navigation--mobile-img" /></a></li>
        {/* <li className="navigation-link"> <Hamburger /> </li> */}
      </ul>
    </nav>
  </div>
);

// == Export
export default Navigation;
