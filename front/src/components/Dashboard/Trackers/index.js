/* eslint-disable import/no-unresolved */
import React from 'react';

import './trackers.scss';

import food from 'src/assets/images/icones/icone-alimentation.svg';
import water from 'src/assets/images/icones/icone-water.svg';
import sleep from 'src/assets/images/icones/icone-sommeil.svg';
import sport from 'src/assets/images/icones/icone-sport.svg';
import weight from 'src/assets/images/icones/icone-poids.svg';
import modalfood from 'src/assets/images/icones/icone-open-modal-alimentation.svg';
import modalwater from 'src/assets/images/icones/icone-open-modal-water.svg';
import modalsleep from 'src/assets/images/icones/icone-open-modal-sommeil.svg';
import modalsport from 'src/assets/images/icones/icone-open-modal-sport.svg';
import modalweight from 'src/assets/images/icones/icone-open-modal-poids.svg';

const Trackers = () => (
  <ul className="trackers">

    <li className="trackers__item trackers__food">
      <a href="#"><img src={modalfood} alt="ajouter une entrée" className="trackers__modal-img" /></a>
      <img src={food} alt="food" className="trackers__rounded-img" />
      <li className="user-stats__item">
        <span>1800 / 2400 Kcal</span>
      </li>
    </li>

    <li className="trackers__item trackers__water">
      <a href="#"><img src={modalwater} alt="ajouter une entrée" className="trackers__modal-img" /></a>
      <img src={water} alt="water" className="trackers__rounded-img" />
      <li className="user-stats__item">
        <span>15 / 200 cl</span>
      </li>
    </li>

    <li className="trackers__item trackers__sleep">
      <a href="#"> <img src={modalsleep} alt="ajouter une entrée" className="trackers__modal-img" /> </a>
      <img src={sleep} alt="sleep" className="trackers__rounded-img" />
      <li className="user-stats__item">
        <span>8 / 8 h</span>
      </li>
    </li>

    <li className="trackers__item trackers__sport">
      <a href="#"> <img src={modalsport} alt="ajouter une entrée" className="trackers__modal-img" /> </a>
      <img src={sport} alt="sport" className="trackers__rounded-img" />
      <li className="user-stats__item">
        <span>25 / 30 min</span>
      </li>
    </li>

    <li className="trackers__item trackers__weight">
      <a href="#"> <img src={modalweight} alt="ajouter une entrée" className="trackers__modal-img" /> </a>
      <img src={weight} alt="poids" className="trackers__rounded-img" />
      <li className="user-stats__item">
        <span>80 / 65 kg</span>
      </li>
    </li>

  </ul>
);

// == Export
export default Trackers;
