/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';

import profile from 'src/assets/images/trackers/user.svg';
import StatFood from './StatFood';
import StatWater from './StatWater';
import StatSleep from './StatSleep';
import StatSport from './StatSport';
import StatWeight from './StatWeight';

import './stats.scss';

const Stats = ({ userData }) => {
  if (!userData || !userData.firstName) {
    return <div>Récupération de la ressource...</div>;
  }

  const birthdate = new Date(userData.birthdate);
  const diff = Date.now() - birthdate.getTime();
  const age = new Date(diff);
  const displayAge = Math.abs(age.getUTCFullYear() - 1970);

  const userDataHeight = userData.height > 0;
  const userDataWeight = userData.weights.length > 0;
  const userDataImc = userData.imc > 0;
  const userDataAge = (userDataHeight + userDataWeight) > 0;

  return (
    <div>
      <ul className="statistics__list">

        <li className="statistic statistic__profile">
          <img src={profile} alt="profile" className="statistics__rounded-img-profile" />

          <h2>Bonjour, {userData.firstName} !</h2>
          <ul className="user-details__tags--stats">
            { userDataAge
              ? <li className="user-details__tag--stats">{displayAge} ans</li>
              : <li className="user-details__tag--stats">-- ans</li>}
            { userDataHeight
              ? <li className="user-details__tag--stats">{userData.height} cm</li>
              : <li className="user-details__tag--stats">-- cm</li>}
            { userDataWeight
              ? <li className="user-details__tag--stats">{userData.weights[userData.weights.length - 1].weight} kg</li>
              : <li className="user-details__tag--stats">-- kg</li>}
            { userDataImc
              ? <li className="user-details__tag--stats">IMC : {userData.imc}</li>
              : <li className="user-details__tag--stats">IMC : --</li>}
          </ul>
        </li>
        <StatFood />
        <StatWater />
        <StatSleep />
        <StatSport />
        <StatWeight />
      </ul>
    </div>
  );
};
Stats.propTypes = {
  userData: PropTypes.objectOf().isRequired,
};

// == Export
export default Stats;
