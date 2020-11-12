/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './userDetails.scss';

import profile from 'src/assets/images/trackers/user.svg';

const UserDetails = ({ userData }) => {
  if (!userData || !userData.firstName) {
    return <div>Récupération de la ressource...</div>;
  }

  const birthdate = new Date(userData.birthdate);
  const diff = Date.now() - birthdate.getTime();
  const age = new Date(diff);
  const displayAge = Math.abs(age.getUTCFullYear() - 1970);

  const userDataHeight = userData.height > 0;
  const userDataweight = userData.weights.length > 0;
  const userDataImc = userData.imc > 0;
  const userDataAge = (userDataHeight + userDataweight) > 0;
  const userWeightGoal = 60;
  const userActualWeight = userData.weights[userData.weights.length - 1].weight;

  return (
    <div className="dashboard__right">
      <div className="user-details">
        <NavLink to="#">
          <img src={profile} alt="profile" className="user-details__picture" />
        </NavLink>
        <div className="user-details__infos">
          <h2>Bonjour, {userData.firstName} !</h2>
          <ul className="user-details__tags">

            {/* <li className="user-details__tag">{userData.birthdate} ans</li> */}
            {/* <li className="user-details__tag">{userData.height} cm</li> */}
            {/* <li className="user-details__tag">{userData.weights.map((item) => (
              <div>{item.weight}</div>
            ))} kg </li> */}
            { userDataAge
              ? <li className="user-details__tag">{displayAge} ans</li>
              : <li className="user-details__tag">-- ans</li>}
            { userDataHeight
              ? <li className="user-details__tag">{userData.height} cm</li>
              : <li className="user-details__tag">-- cm</li>}
            { userDataweight
              ? <li className="user-details__tag">{userData.weights[userData.weights.length - 1].weight} kg</li>
              : <li className="user-details__tag">-- kg</li>}
            { userDataImc
              ? <li className="user-details__tag">IMC : {userData.imc}</li>
              : <li className="user-details__tag">IMC : --</li>}
            {/* { userData.weights.length > 0 && <li className="user-details__tag">{userData.weights[userData.weights.length - 1].weight} kg</li>}
            { userData.weights.length < 0 && <li className="user-details__tag">--kg</li>}
            { userData.weights.length > 0 && <li className="user-details__tag">imc: {userData.weights[userData.weights.length - 1].imc}</li>}
            { userData.weights.length < 0 && <li className="user-details__tag">imc: --</li>} */}
          </ul>
        </div>

      </div>

      <ul className="user-stats">
        <li className="user-stats__item">
          <span className="user-stats__advices">Attention à équilibrer vos repas !</span>
          <label htmlFor="calories">
            <progress id="calories" max="2400" value={userData.foods[userData.foods.length - 1].caloryTotal} className="progress-food" />
          </label>
        </li>

        <li className="user-stats__item">
          <span className="user-stats__advices">Pensez à boire toutes les heures.</span>
          <label htmlFor="water">
            <progress id="water" max="200" value={userData.waters[userData.waters.length - 1].water} className="progress-water" />
          </label>
        </li>

        <li className="user-stats__item">
          <span className="user-stats__advices">Bravo, il est important de bien dormir.</span>
          <label htmlFor="sleep">
            <progress id="sleep" max={userData.estimatedSleepTime} value={userData.sleeps[userData.sleeps.length - 1].sleepHours} className="progress-sleep" />
          </label>
        </li>

        <li className="user-stats__item">
          <span className="user-stats__advices">Continuez ainsi !</span>
          <label htmlFor="sport">
            <progress id="sport" max="2000" value={userData.sports[userData.sports.length - 1].caloryTotal} className="progress-sport" />
          </label>
        </li>

        <li className="user-stats__item">
          <span className="user-stats__advices">Courage, vous allez y arriver.</span>
          <label htmlFor="weight">
            <progress id="weight" max="1" value={1 - ((userActualWeight - userWeightGoal) / userWeightGoal)} className="progress-weight" />
          </label>
        </li>
      </ul>
    </div>
  );
};

UserDetails.propTypes = {
  userData: PropTypes.objectOf().isRequired,
};

// == Export
export default UserDetails;
