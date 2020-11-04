/* eslint-disable import/no-unresolved */
import React from 'react';
import { NavLink } from 'react-router-dom';

import './trackers.scss';
import sleep from 'src/assets/images/trackers/icone-sommeil.svg';
import modalsleep from 'src/assets/images/trackers/icone-open-modal-sommeil.svg';

import TrackerWater from 'src/containers/TrackerWater';
import TrackerWeight from 'src/containers/TrackerWeight';
import TrackerSport from 'src/containers/TrackerSport';
import TrackerFood from 'src/containers/TrackerFood';

import ModalWater from 'src/containers/ModalWater';
import ModalWeight from 'src/containers/ModalWeight';
import ModalSport from 'src/containers/ModalSport';
import ModalFood from 'src/containers/ModalFood';
import ModalSleep from './ModalSleep';

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
      <TrackerFood setModal={setModal} />
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
