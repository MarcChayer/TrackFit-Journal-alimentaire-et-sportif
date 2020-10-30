import React from 'react';

import './menu.scss';

const Menu = () => (
  <div className="dashboard__menu">
    <ul className="dashboard__menu-list">
      <li className="dashboard__menu-item">
        <a href="/tableaudebord" className="dashboard__menu-link">Tableau de bord</a>
      </li>
      <li className="dashboard__menu-item">
        <a href="/statistiques" className="dashboard__menu-link">Statistiques</a>
      </li>
      <li className="dashboard__menu-item dashboard__menu-item-active">
        <a href="/parametres" className="dashboard__menu-link">Paramètres</a>
      </li>
    </ul>
  </div>
);

// == Export
export default Menu;
