/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
import React from 'react';

import './params.scss';

import profile from 'src/assets/images/profile.svg';
import man from 'src/assets/images/man.svg';
import woman from 'src/assets/images/woman.svg';
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
        <li className="user-params__tag-list">Paul Ochon</li>
        <li className="user-params__tag-list">01/05/1990</li>
        <li className="user-params__tag-list">Poids initial : 87 kg</li>
        <li className="user-params__tag-list">Poids à atteindre : 80 kg</li>
        <li className="user-params__tag-list">Indice de Masse Corporelle : 22.4</li>
        <li className="user-params__tag-list">Nombre d'heures de sommeil : 8 h</li>
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
            <div className="more-infos">

              <p className="label-personnal">Quel est votre sexe ?</p>
              <div className="gender-infos">
                <label className="label-personnal"><img src={man} alt="homme" className="picto" />
                  <input type="radio" className="radio-is-hidden" name="gender" value="man" />
                </label>
                {/* attention, bien laisser le name="gender" => propose UN SEUL choix ! */}
                <label className="label-personnal"><img src={woman} alt="femme" className="picto" />
                  <input type="radio" className="radio-is-hidden" name="gender" value="woman" />
                </label>
              </div>

              <label className="label-personnal">Combien mesurez-vous ?
                <input className="input-personnal" type="number" placeholder="170 cm" />
              </label>

              <label className="label-personnal">Combien pesez-vous ?
                <input className="input-personnal" type="number" placeholder="69 kg" />
              </label>

              <label className="label-personnal">Quel est votre poids à atteindre ?
                <input className="input-personnal" type="number" placeholder="69 kg" />
              </label>

              <label className="label-personnal">Combien sommeil ?
                <input className="input-personnal" type="number" placeholder="7 h" />
              </label>

            </div>
          </div>

        </div>

        <button className="settings-button" type="submit">Mettre à jour</button>

      </form>

    </div>
  </div>
);

// == Export
export default Params;
