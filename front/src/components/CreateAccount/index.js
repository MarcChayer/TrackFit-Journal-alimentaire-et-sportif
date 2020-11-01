/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';

import './createAccount.scss';

const CreateAccount = (
  {
    lastName,
    firstName,
    email,
    password,
    confirmedPassword,
    handleRegisterUser,
    isLogged,
  },
) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('soumission du formulaire d\'inscription');
    handleRegisterUser();
  };
  if (!isLogged) {
    return (
      <div className="createaccount">
        <h1 className="create-title">Créer un compte</h1>

        <form className="create-form" onSubmit={handleSubmit}>
          <label className="create-label">Nom :</label>
          <Field
            value={firstName}
            name="firstName"
            placeholder="Nom"
          />
          <label className="create-label">Prénom :</label>
          <Field
            value={lastName}
            name="lastName"
            placeholder="Prénom"
          />
          <label className="create-label">E-mail :</label>
          <Field
            value={email}
            name="email"
            placeholder="E-mail"
          />
          <label className="create-label">Mot de passe :</label>
          <Field
            value={password}
            name="password"
            placeholder="Mot de passe"
            type="password"
          />
          <label className="create-label">Confirmez votre mot de passe :</label>
          <Field
            value={confirmedPassword}
            name="confirmedPassword"
            placeholder="Confirmez votre mot de passe"
            type="password"
          />
          <button className="create-button" type="submit">Créer votre compte</button>
        </form>

        <p>Vous avez déjà un compte ?<NavLink to="/connexion" className="create-id"> Identifiez-vous</NavLink></p>
      </div>
    );
  }

  return (<Redirect to="/tableaudebord" exact />);
};

CreateAccount.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmedPassword: PropTypes.string.isRequired,
  handleRegisterUser: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default CreateAccount;
