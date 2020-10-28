import React from 'react';

const Menu = () => (
  <div className="settings__menu">
    <ul className="settings__menu-list">
      <li className="settings__menu-item">
        <a href="/tableaudebord" className="settings__menu-link">Tableau de bord</a>
      </li>
      <li className="settings__menu-item">
        <a href="/statistiques" className="settings__menu-link">Statistiques</a>
      </li>
      <li className="settings__menu-item settings__menu-item-active">
        <a href="/parametres" className="settings__menu-link">Paramètres</a>
      </li>
    </ul>
  </div>
);

// == Export
export default Menu;
