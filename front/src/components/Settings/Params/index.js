/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
import PropTypes from 'prop-types';
import React from 'react';
import settings from 'src/assets/images/illustrations/illustration-settings.svg';
import profile from 'src/assets/images/trackers/user.svg';
import FieldParams from 'src/containers/FieldParams';
import './params.scss';

const Params = (
  {
    lastName,
    firstName,
    birthdate,
    height,
    estimatedSleepTime,
    weight,
    weightGoal,
    handleParams,
  },
) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleParams();
  };

  return (
    <div className="params-content">
      <div className="params-infos">
        <ul className="user-params__tags">
          <li className="user-params__tag-list">
            <img src={profile} alt="profile" className="user-params__picture" />
          </li>
          <li className="user-params__tag-list">Prénom : {firstName.charAt(0).toUpperCase() + firstName.substring(1).toLowerCase()}</li>
          <li className="user-params__tag-list">Nom : {lastName.charAt(0).toUpperCase() + lastName.substring(1).toLowerCase()}</li>
          <li className="user-params__tag-list">Poids initial : {weight}kg</li>
          <li className="user-params__tag-list">Poids à atteindre : {weightGoal}kg</li>
          <li className="user-params__tag-list">Sommeil nécessaire : {estimatedSleepTime}h</li>
        </ul>
      </div>

      <div className="params-settings">

        <form className="settings-form" onSubmit={handleSubmit}>

          <div className="params-settings-bloc">
            <h1 className="settings-title">Vos informations :</h1>
            <div className="settings-content">
              <label className="settings-label">Prénom :
                <FieldParams
                  name="firstName"
                  type="text"
                  placeholder={firstName}
                  value={firstName}
                  className="settings-input"
                />
              </label>
              <label className="settings-label">Nom :
                <FieldParams
                  name="lastName"
                  type="text"
                  placeholder={lastName}
                  value={lastName}
                  className="settings-input"
                />
              </label>

              <p className="personnal-info">Pour effectuer un suivi exact, nous avons besoin de quelques informations basiques de votre part :</p>

              <label className="settings-label">Date de naissance :
                <FieldParams
                  name="birthdate"
                  type="date"
                  placeholder={birthdate}
                  value={birthdate}
                  min="1900-01-01"
                  max="2020-12-31"
                  className="settings-input"
                />
              </label>

              <label className="settings-label">Taille en cm :
                <FieldParams
                  name="height"
                  type="number"
                  placeholder={height}
                  value={height}
                  min="100"
                  max="200"
                  className="settings-input"
                />
              </label>

              <label className="settings-label">Poids initial :
                <FieldParams
                  name="weight"
                  type="number"
                  placeholder={weight}
                  value={weight}
                  min="40"
                  max="140"
                  className="settings-input"
                />
              </label>

              <label className="settings-label">Votre poids à atteindre :
                <FieldParams
                  name="weightGoal"
                  type="number"
                  placeholder={weightGoal}
                  value={weightGoal}
                  min="40"
                  max="140"
                  className="settings-input"
                />
              </label>

              <label className="settings-label">Besoin en sommeil :
                <FieldParams
                  name="estimatedSleepTime"
                  type="number"
                  placeholder={estimatedSleepTime}
                  value={estimatedSleepTime}
                  min="1"
                  max="24"
                  className="settings-input"
                />
              </label>
            </div>
          </div>
          <button className="settings-button" type="submit">Mettre à jour</button>
        </form>
      </div>
      <img src={settings} alt="paramètres" className="user-params__illustration" />

    </div>
  );
};

Params.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  birthdate: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  estimatedSleepTime: PropTypes.number.isRequired,
  weight: PropTypes.string.isRequired,
  weightGoal: PropTypes.number.isRequired,
  handleParams: PropTypes.func.isRequired,
};

// == Export
export default Params;
