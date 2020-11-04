/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { NavLink } from 'react-router-dom';
import food from 'src/assets/images/trackers/icone-alimentation.svg';
import modalfood from 'src/assets/images/trackers/icone-open-modal-alimentation.svg';

const TrackerFood = ({ setModal }) => (
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
);

export default TrackerFood;
