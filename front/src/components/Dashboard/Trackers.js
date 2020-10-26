import React from 'react';

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
    <li className="trackers__item">
      <div className="trackers__header trackers__header__food">  &nbsp; </div>
      <a href=""> <a href=""> </a><img src={modalfood} alt="ajouter une entrée" className="modal__img" /> </a>
      <img src={food} alt="food" className="trackers__img" />
      {/* <h3>Nutrition</h3>
      <p>Vous avez consommé</p> */}
      <li className="user-stats__item">
        <span>1800 Kcal / 2400 Kcal</span>
      </li>
    </li>
    <li className="trackers__item">
      <div className="trackers__header trackers__header__water">  &nbsp; </div>
      <a href=""> <img src={modalwater} alt="ajouter une entrée" className="modal__img" /> </a>
      <img src={water} alt="water" className="trackers__img" />
      {/* <h3>Hydratation</h3>
      <p>Vous avez bu</p> */}
      <li className="user-stats__item">
        <span>15 cl / 200 cl</span>
      </li>
    </li>
    <li className="trackers__item">
      <div className="trackers__header trackers__header__sleep">  &nbsp; </div>
      <a href=""> <img src={modalsleep} alt="ajouter une entrée" className="modal__img" /> </a>
      <img src={sleep} alt="sleep" className="trackers__img" />
      {/* <h3>Sommeil</h3>
      <p>Vous avez dormi</p> */}
      <li className="user-stats__item">
        <span>8 h / 8 h</span>
      </li>
    </li>
    <li className="trackers__item">
      <div className="trackers__header trackers__header__sport">  &nbsp; </div>
      <a href=""> <img src={modalsport} alt="ajouter une entrée" className="modal__img" /> </a>
      <img src={sport} alt="sport" className="trackers__img" />
      {/* <h3>Activité</h3>
      <p>Vous avez bougé pendant</p> */}
      <li className="user-stats__item">
        <span>25 min / 30 min</span>
      </li>
    </li>
    <li className="trackers__item">
      <div className="trackers__header trackers__header__weight">  &nbsp; </div>
      <a href=""> <img src={modalweight} alt="ajouter une entrée" className="modal__img" /> </a>
      <img src={weight} alt="poids" className="trackers__img" />
      {/* <h3>Poids</h3>
      <p>Vous pesez</p> */}
      <li className="user-stats__item">
        <span>80 kg / 65 kg</span>
      </li>
    </li>
  </ul>
);

// == Export
export default Trackers;
