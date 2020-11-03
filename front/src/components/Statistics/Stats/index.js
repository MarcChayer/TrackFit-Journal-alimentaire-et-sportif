/* eslint-disable import/no-unresolved */
import React from 'react';

import food from 'src/assets/images/trackers/icone-alimentation.svg';
import water from 'src/assets/images/trackers/icone-water.svg';
import sleep from 'src/assets/images/trackers/icone-sommeil.svg';
import sport from 'src/assets/images/trackers/icone-sport.svg';
import weight from 'src/assets/images/trackers/icone-poids.svg';
import profile from 'src/assets/images/trackers/user.svg';

import './stats.scss';

const Stats = () => (
  <ul className="statistics__list">

    <li className="statistic statistic__profile">
      <img src={profile} alt="profile" className="statistics__rounded-img-profile" />

      <h2>Bonjour Paul Ochon !</h2>
      <ul className="user-details__tags--stats">
        <li className="user-details__tag--stats">23 ans</li>
        <li className="user-details__tag--stats">183 cm</li>
        <li className="user-details__tag--stats">75 kg</li>
        <li className="user-details__tag--stats">IMC : 22.4</li>
      </ul>
    </li>

    <li className="statistic statistic__food">
      <img src={food} alt="food" className="statistics__rounded-img" />
    </li>

    <li className="statistic statistic__water">
      <img src={water} alt="water" className="statistics__rounded-img" />
    </li>

    <li className="statistic statistic__sleep">
      <img src={sleep} alt="sleep" className="statistics__rounded-img" />
    </li>

    <li className="statistic statistic__sport">
      <img src={sport} alt="sport" className="statistics__rounded-img" />
    </li>

    <li className="statistic statistic__weight">
      <img src={weight} alt="poids" className="statistics__rounded-img" />
    </li>
  </ul>
);

// == Export
export default Stats;
