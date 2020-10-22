/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
import React from 'react';
import logo from 'src/assets/Logo_TrackFit_icone.svg';
import './style.scss';

const CreateAccount = () => (
  <div className="createaccount">

    <img className="logotrackfit" src={logo} alt="trackFit" />
    <h1>Créer un compte</h1>

    <form className="createform">
      <label>Votre nom :</label>
      <input className="create" type="text" placeholder="Nom" />
      <label>Votre prénom :</label>
      <input className="create" type="text" placeholder="prénom" />
      <label>E-mail:</label>
      <input className="create" type="text" placeholder="E-mail" />
      <label>Mot de passe:</label>
      <input className="create" type="text" placeholder="Mot de passe" />
      <label>Mot de passe à nouveau</label>
      <input className="create" type="text" placeholder="Mot de passe à nouveau" />
      <button type="submit">Créer votre compte</button>
    </form>

    <p>Vous avez déjà compte?<a className="id" href="#"> Identifiez-vous</a></p>

  </div>
);
export default CreateAccount;
