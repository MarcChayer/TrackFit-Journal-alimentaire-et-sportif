/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { NavLink } from 'react-router-dom';
import iconfood from 'src/assets/images/trackers/icone-alimentation.svg';
import modalfood from 'src/assets/images/trackers/icone-open-modal-alimentation.svg';

const TrackerFood = ({ setModal, lastFoodCalory }) => (
  <li className="trackers__item trackers__food">
    <NavLink to="#"><img
      onClick={() => setModal('food')}
      src={modalfood}
      alt="ajouter une entrée"
      className="trackers__modal-img"
    />
    </NavLink>
    <img src={iconfood} alt="food" className="trackers__rounded-img" />
    <p className="user-stats__item">
      <span>{lastFoodCalory} cal</span>
    </p>
  </li>
);

export default TrackerFood;
