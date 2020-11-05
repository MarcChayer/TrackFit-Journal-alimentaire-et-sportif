/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { NavLink } from 'react-router-dom';

import './params.scss';

import profile from 'src/assets/images/trackers/user.svg';
import add from 'src/assets/images/trackers/icone-open-modal-sport.svg';

const Params = (
  {
    lastName,
    firstName,
    email,
    birthdate,
    gender,
    height,
    estimatedSleepTime,
    weightGoal,
    password,
    handleParams,
  },
) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleParams();
    console.log('soumission du formulaire');
  };
  return (
    <div className="params-content">

      <div className="params-infos">

        <ul className="user-params__tags">
          <li className="user-params__tag-list">
            <img src={profile} alt="profile" className="user-params__picture" />
            <NavLink to="#">
              <img src={add} alt="ajouter" className="user-add__picture" />
            </NavLink>
          </li>
          <li className="user-params__tag-list">user.firstName user.lastName</li>
          <li className="user-params__tag-list">user.birthdate</li>
          <li className="user-params__tag-list">Poids initial : user.weight kg</li>
          <li className="user-params__tag-list">Poids à atteindre : kg</li>
          <li className="user-params__tag-list">IMC : user.imc</li>
          <li className="user-params__tag-list">Heures de sommeil : user.sleep h</li>
        </ul>
      </div>

      <div className="params-settings">

        <form className="settings-form" onSubmit={handleSubmit}>

          <div className="params-settings-bloc">
            <h1 className="settings-title">Vos informations :</h1>
            <div className="settings-content">
              <label className="settings-label">Prénom
                <input className="settings-input" type="text" placeholder="Prénom" />
              </label>
              <label className="settings-label">Nom
                <input className="settings-input" type="text" placeholder="Nom" />
              </label>
              <label className="settings-label">Date de naissance
                <input className="settings-input" placeholder="JJ/MM/AAAA" type="date" min="1900-01-01" max="2020-12-31" />
              </label>
              <label className="settings-label settings-label--update">E-mail
                <input className="settings-input" type="email" placeholder="E-mail" />
              </label>
              <label className="settings-label">Mot de passe actuel
                <input className="settings-input" type="password" placeholder="Mot de passe actuel" />
              </label>
              <label className="settings-label">Nouveau mot de passe
                <input className="settings-input" type="password" placeholder="Nouveau mot de passe" />
              </label>
            </div>
          </div>
          <button className="settings-button" type="submit">Mettre à jour</button>
        </form>
      </div>

      <div className="params-settings">
        <div className="params-settings-bloc-questions">
          <h1 className="settings-title-questions">Paramètres de l'application :</h1>
          <p className="personnal-info">Pour effectuer un suivi exact, nous avons besoin de quelques informations basiques de votre part :</p>
          <div className="personnal-settings-content">

            <form>
              <label className="label-personnal">Vous êtes...
                <select className="input-personnal-gender" name="genders" id="gender-select">
                  <option value="male">un homme</option>
                  <option value="female">une femme</option>
                </select>
              </label>

              <label className="label-personnal">Votre taille en cm :
                <input className="input-personnal" type="number" min="100" max="200" placeholder="170 cm" />
              </label>

              <label className="label-personnal">Votre poids initial :
                <input className="input-personnal" type="number" min="40" max="140" placeholder="89 kg" />
              </label>

              <label className="label-personnal">Votre poids à atteindre :
                <input className="input-personnal" type="number" min="40" max="140" placeholder="69 kg" />
              </label>

              <label className="label-personnal">Votre besoin en sommeil :
                <input className="input-personnal" type="number" min="1" max="24" placeholder="7 h" />
              </label>
              <button className="settings-button-2" type="submit">Mettre à jour</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// == Export
export default Params;
