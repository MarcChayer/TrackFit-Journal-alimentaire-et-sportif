import React from 'react';

const Menu = () => (
  <div className="stats__menu">
    <ul className="stats__menu-list">
      <li className="stats__menu-item">
        <a href="/tableaudebord" className="stats__menu-link">Tableau de bord</a>
      </li>
      <li className="stats__menu-item stats__menu-item-active">
        <a href="/statistiques" className="stats__menu-link">Statistiques</a>
      </li>
      <li className="stats__menu-item">
        <a href="/parametres" className="stats__menu-link">Paramètres</a>
      </li>
    </ul>
  </div>
);

// == Export
export default Menu;
