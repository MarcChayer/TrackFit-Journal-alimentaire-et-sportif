/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
import React from 'react';

import './style.scss';

const CreateAccount = () => (
  <div className="createaccount">

    <h1>Créer un compte</h1>

    <form className="createform">
      <label>Votre nom :
        <input className="create" type="text" placeholder="Nom" />
      </label>
      <label>Votre prénom :
        <input className="create" type="text" placeholder="Prénom" />
      </label>
      <label>E-mail :
        <input className="create" type="text" placeholder="E-mail" />
      </label>
      <label>Mot de passe :
        <input className="create" type="text" placeholder="Mot de passe" />
      </label>
      <label>Mot de passe à nouveau :
        <input className="create" type="text" placeholder="Mot de passe à nouveau" />
      </label>
      <button type="submit">Créer votre compte</button>
    </form>

    <p>Vous avez déjà un compte ?<a className="id" href="/connexion"> Identifiez-vous</a></p>

  </div>
);
export default CreateAccount;
