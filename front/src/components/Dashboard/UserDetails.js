/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import profile from 'src/assets/images/profile.svg';

const UserDetails = () => (
  <div className="dashboard__right">
    <div className="user-details">
      <a href="#">
        <img src={profile} alt="profile" className="user-details__picture" />
      </a>
      <div className="user-details__infos">
        <h2>Bonjour Paul Ochon !</h2>
        <ul className="user-details__tags">
          <li className="user-details__tag">23 ans</li>
          <li className="user-details__tag">183 cm</li>
          <li className="user-details__tag">75 kg</li>
          <li className="user-details__tag">IMC : 22.4</li>
        </ul>
      </div>
    </div>

    <ul className="user-stats">
      <li className="user-stats__item">
        <label htmlFor="calories">
          <progress id="calories" max="2400" value="1800" className="progress-food" />
        </label>
        <span className="user-stats__advices">Attention à équilibrer vos repas !</span>
      </li>

      <li className="user-stats__item">
        <label htmlFor="water">
          <progress id="water" max="200" value="75" className="progress-water" />
        </label>
        <span className="user-stats__advices">Pensez à boire toutes les heures.</span>
      </li>

      <li className="user-stats__item">
        <label htmlFor="sleep">
          <progress id="sleep" max="8" value="8" className="progress-sleep" />
        </label>
        <span className="user-stats__advices">Bravo, il est important de bien dormir.</span>
      </li>

      <li className="user-stats__item">
        <label htmlFor="sport">
          <progress id="sport" max="30" value="25" className="progress-sport" />
        </label>
        <span className="user-stats__advices">Continuez ainsi !</span>
      </li>

      <li className="user-stats__item">
        <label htmlFor="weight">
          <progress id="weight" max="20" value="5" className="progress-weight" />
        </label>
        {/* initialement, il pesait 85 kg donc il avait 20 kg à perdre. il pèse mnt 80 donc il a 15 kg à perdre encore sur les 20 initiaux */}
        <span className="user-stats__advices">Courage, vous allez y arriver.</span>
      </li>
    </ul>
  </div>

);

// == Export
export default UserDetails;
