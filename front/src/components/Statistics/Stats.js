/* eslint-disable import/no-unresolved */
import React from 'react';

import food from 'src/assets/images/icones/icone-alimentation.svg';
import water from 'src/assets/images/icones/icone-water.svg';
import sleep from 'src/assets/images/icones/icone-sommeil.svg';
import sport from 'src/assets/images/icones/icone-sport.svg';
import weight from 'src/assets/images/icones/icone-poids.svg';
import profile from 'src/assets/images/profile.svg';

const Stats = () => (
  <ul className="statistics__list">

    <li className="statistic">
      <div className="statistics__header statistics__header__food" />
      <img src={food} alt="food" className="statistics__rounded-img" />
    </li>

    <li className="statistic">
      <div className="statistics__header statistics__header__water" />
      <img src={water} alt="water" className="statistics__rounded-img" />
    </li>

    <li className="statistic">
      <div className="statistics__header statistics__header__profile" />
      <img src={profile} alt="profile" className="statistics__rounded-img" />

      <h2>Bonjour Paul Ochon !</h2>
      <ul className="user-details__tags">
        <li className="user-details__tag">23 ans</li>
        <li className="user-details__tag">183 cm</li>
        <li className="user-details__tag">75 kg</li>
        <li className="user-details__tag">IMC : 22.4</li>
      </ul>
    </li>

    <li className="statistic">
      <div className="statistics__header statistics__header__sleep" />
      <img src={sleep} alt="sleep" className="statistics__rounded-img" />
    </li>

    <li className="statistic">
      <div className="statistics__header statistics__header__sport" />
      <img src={sport} alt="sport" className="statistics__rounded-img" />
    </li>

    <li className="statistic">
      <div className="statistics__header statistics__header__weight" />
      <img src={weight} alt="poids" className="statistics__rounded-img" />
    </li>
  </ul>
);

// == Export
export default Stats;
