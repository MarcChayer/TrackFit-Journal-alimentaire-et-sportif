/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
import React from 'react';

import './params.scss';

import profile from 'src/assets/images/profile.svg';
import paramsIcone from 'src/assets/images/icones/params-icone.svg';
import add from 'src/assets/images/icones/icone-open-modal-sport.svg';

const Params = () => (
  <div className="params-content">

    <div className="params-infos">

      <ul className="user-params__tags">
        <li className="user-params__tag-list">
          <img src={profile} alt="profile" className="user-params__picture" />
          <a href="#">
            <img src={add} alt="ajouter" className="user-add__picture" />
          </a>
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

      <form className="settings-form">

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
              <input className="settings-input" type="date" placeholder="Age" />
            </label>
            <label className="settings-label">E-mail
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

        <div className="params-settings-bloc-questions">
          <h1 className="settings-title">Paramètres de l'application :</h1>
          <p className="personnal-info">Pour effectuer un suivi exact, nous avons besoin de quelques informations basiques de votre part :</p>
          <div className="personnal-settings-content">
            <label className="label-personnal">Votre genre :
              <input className="input-personnal" type="text" placeholder="Homme / Femme" />
            </label>

            <label className="label-personnal">Votre taille en cm :
              <input className="input-personnal" type="number" placeholder="170 cm" />
            </label>

            <label className="label-personnal">Votre poids initial :
              <input className="input-personnal" type="number" placeholder="69 kg" />
            </label>

            <label className="label-personnal">Votre poids à atteindre :
              <input className="input-personnal" type="number" placeholder="69 kg" />
            </label>

            <label className="label-personnal">Votre besoin en Kcal* :
              <input className="input-personnal" type="number" placeholder="1 500 Kcal" />
              <p className="precision-kcal">* par défaut : 2 000 pour un homme / 1 800 pour une femme</p>
            </label>
            <label className="label-personnal">Votre besoin en sommeil :
              <input className="input-personnal" type="number" placeholder="7 h" />
            </label>
          </div>
        </div>
      </form>
      <img src={paramsIcone} alt="illustration" className="illustration" />
      <button className="settings-button" type="submit">Mettre à jour</button>
    </div>
  </div>
);

// == Export
export default Params;
