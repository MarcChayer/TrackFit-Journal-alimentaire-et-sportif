/* eslint-disable import/no-unresolved */
import React from 'react';
import { NavLink } from 'react-router-dom';

import './trackers.scss';
import food from 'src/assets/images/trackers/icone-alimentation.svg';
import sleep from 'src/assets/images/trackers/icone-sommeil.svg';
import modalfood from 'src/assets/images/trackers/icone-open-modal-alimentation.svg';
import modalsleep from 'src/assets/images/trackers/icone-open-modal-sommeil.svg';

import TrackerSport from '../../../containers/TrackerSport';
import TrackerWater from 'src/containers/TrackerWater';
import TrackerWeight from 'src/containers/TrackerWeight';

import ModalWater from 'src/containers/ModalWater';
import ModalWeight from 'src/containers/ModalWeight';
import ModalSport from 'src/containers/ModalSport';
import ModalSleep from './ModalSleep';
import ModalFood from './ModalFood';

const getModal = (name, closeHandler) => {
  let Modal;
  if (name === 'food') Modal = ModalFood;
  else if (name === 'water') Modal = ModalWater;
  if (name === 'sleep') Modal = ModalSleep;
  else if (name === 'sport') Modal = ModalSport;
  else if (name === 'weight') Modal = ModalWeight;
  return <Modal onClick={() => closeHandler(null)} />;
};
const Trackers = () => {
  const [modal, setModal] = React.useState(null);
  return (
    <ul className="trackers">
      <li className="trackers__item trackers__food">
        <NavLink to="#"><img
          onClick={() => setModal('food')}
          src={modalfood}
          alt="ajouter une entrée"
          className="trackers__modal-img"
        />
        </NavLink>
        <img src={food} alt="food" className="trackers__rounded-img" />
        <li className="user-stats__item">
          <span>1800 / 2400 cal</span>
        </li>
      </li>
      <TrackerWater setModal={setModal} />
      <li className="trackers__item trackers__sleep">
        <NavLink to="#">
          <img
            onClick={() => setModal('sleep')}
            src={modalsleep}
            alt="ajouter une entrée"
            className="trackers__modal-img"
          />
        </NavLink>
        <img src={sleep} alt="sleep" className="trackers__rounded-img" />
        <li className="user-stats__item">
          <span>8 / 8 h</span>
        </li>
      </li>
      <TrackerSport setModal={setModal} />
      <TrackerWeight setModal={setModal} />
      { modal && <div className="trackers-modal">{ getModal(modal, setModal) }</div> }
    </ul>
  );
};
// == Export
export default Trackers;
