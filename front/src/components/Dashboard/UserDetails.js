import React from 'react';

import food from 'src/assets/images/icones/icone-alimentation.svg';
import water from 'src/assets/images/icones/icone-water.svg';
import sleep from 'src/assets/images/icones/icone-sommeil.svg';
import sport from 'src/assets/images/icones/icone-sport.svg';
import weight from 'src/assets/images/icones/icone-poids.svg';
import profile from 'src/assets/images/profile.svg';

const UserDetails = () => (
  <div className="dashboard__right">
    <div className="user-details">
      <a href="#">
        <img src={profile} alt="profile" className="user-details__picture" />
      </a>
      <div className="user-details__infos">
        <h2>Paul Ochon</h2>
        <ul className="user-details__tags">
        <li className="user-details__tag">23 ans</li>
          <li className="user-details__tag">180 cm</li>
          <li className="user-details__tag">75 kg</li>
          <li className="user-details__tag">IMC : 23,15</li>
        </ul>
      </div>
    </div>

    <ul className="user-stats">
      <li className="user-stats__item">
        <label htmlFor="calories">
          {/* <img src={food} alt="nourriture" className="trackers__mini-img" /> */}
          <progress id="calories" max="2400" value="1800" className="progress-food" />
        </label>
        <span className="advices">Attention à équilibrer vos repas !</span>
      </li>

      <li className="user-stats__item">
        <label htmlFor="water">
          {/* <img src={water} alt="eau" className="trackers__mini-img" /> */}
          <progress id="water" max="200" value="75" className="progress-water" />
        </label>
        <span className="advices">Pensez à boire toutes les heures.</span>
      </li>

      <li className="user-stats__item">
        <label htmlFor="sleep">
          {/* <img src={sleep} alt="sommeil" className="trackers__mini-img" /> */}
          <progress id="sleep" max="8" value="8" className="progress-sleep" />
        </label>
        <span className="advices">Bravo, il est important de bien dormir.</span>
      </li>

      <li className="user-stats__item">
        <label htmlFor="sport">
          {/* <img src={sport} alt="sport" className="trackers__mini-img" /> */}
          <progress id="sport" max="30" value="25" className="progress-sport" />
        </label>
        <span className="advices">Continuez ainsi !</span>
      </li>

      <li className="user-stats__item">
        <label htmlFor="weight">
          {/* <img src={weight} alt="poids" className="trackers__mini-img" /> */}
          <progress id="weight" max="20" value="5" className="progress-weight" />
        </label>
        {/* initialement, il pesait 85 kg donc il avait 20 kg à perdre. il pèse mnt 80 donc il a 15 kg à perdre encore sur les 20 initiaux */}
        <span className="advices">Courage, vous allez y arriver.</span>
      </li>
    </ul>
  </div>

);

// == Export
export default UserDetails;
