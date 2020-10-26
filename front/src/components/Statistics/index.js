// eslint-disable-next-line max-len
// == Import npm
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWeight, faRunning, faBed, faTint, faCarrot, faCircle,
} from '@fortawesome/free-solid-svg-icons';

// == Import
import './statistics.scss';
import food from 'src/assets/images/icones/icone-alimentation.svg';
import water from 'src/assets/images/icones/icone-water.svg';
import sleep from 'src/assets/images/icones/icone-sommeil.svg';
import sport from 'src/assets/images/icones/icone-sport.svg';
import weight from 'src/assets/images/icones/icone-poids.svg';

// == Composant
const Statistics = () => (
  <div className="statistics">
    {/* div qui englobe le statistics */}

    <div className="statistics__menu">
      {/* div qui englobe le header (menu) du statistics */}
      <ul className="statistics__menu-list">
        <li className="statistics__menu-item">
          <a href="/tableaudebord" className="statistics__menu-link">Tableau de bord</a>
        </li>
        <li className="statistics__menu-item  statistics__menu-item--active">
          <a href="/statistiques" className="statistics__menu-link">Statistiques</a>
        </li>
        <li className="statistics__menu-item">
          <a href="/parametres" className="statistics__menu-link">Paramètres</a>
        </li>
      </ul>
    </div>

    <div className="statistics__content">
      {/* div qui englobe le contenu du statistics */}

      <div className="statistics__left">
        <ul className="trackers">
          <li className="trackers__item">
            <img src={food} alt="food" className="trackers__img" />
            <h3>Nutrition</h3>
            <p>Stastistiques Nutrition</p>
          </li>
          <li className="trackers__item">
            <img src={water} alt="water" className="trackers__img" />
            <h3>Hydratation</h3>
            <p>Stastistiques Hydratation</p>
          </li>
          <li className="trackers__item">
            <img src={sleep} alt="sleep" className="trackers__img" />
            <h3>Sommeil</h3>
            <p>Stastistiques Sommeil</p>
          </li>
          <li className="trackers__item">
            <img src={sport} alt="sport" className="trackers__img" />
            <h3>Activité</h3>
            <p>Stastistiques Activité</p>
          </li>
          <li className="trackers__item">
            <img src={weight} alt="weight" className="trackers__img" />
            <h3>Poids</h3>
            <p>Stastistiques Poids</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

// == Export
export default Statistics;
