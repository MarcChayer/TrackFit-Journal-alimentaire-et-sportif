/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/components/CreateAccount/Field';

import './createAccount.scss';

const CreateAccount = (
  {
    lastName,
    firstName,
    email,
    password,
    confirmedPassword,
    handleRegisterUser,
  },
) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('soumission du formulaire d\'inscription');
    handleRegisterUser();
  };
  console.log('firstName', firstName);
  return (
    <div className="createaccount">

      <h1 className="title">Créer un compte</h1>

      <form className="createform" onSubmit={handleSubmit}>
        <label>Votre nom :</label>
        <Field
          value={firstName}
          name="firstName"
          placeholder="nom"
        />
        <label>Votre prénom :</label>
        <Field
          value={lastName}
          name="lastName"
          placeholder="PréNom"
        />
        <label>E-mail :</label>
        <Field
          value={email}
          name="e-mail"
          placeholder="E-mail"
        />
        <label>Mot de passe :</label>
        <Field
          value={password}
          name="password"
          placeholder="Mot de passe"
        />
        <label>Confirmez votre mot de passe :</label>
        <Field
          value={confirmedPassword}
          name="confirmedPassword"
          placeholder="Confirmez votre mot de passe"
        />
        <button className="button" type="submit">Créer votre compte</button>
      </form>

      <p>Vous avez déjà un compte ?<a className="id" href="/connexion"> Identifiez-vous</a></p>
    </div>
  );
};

CreateAccount.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmedPassword: PropTypes.string.isRequired,
  handleRegisterUser: PropTypes.func.isRequired,
};
export default CreateAccount;
