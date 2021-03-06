/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  },
) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleRegisterUser();
  };

  return (
    <div className="createaccount">
      <Helmet defaultTitle="Création de compte">
        <title>Création de compte</title>
        <meta
          name="description"
          content="Création de compte"
        />
      </Helmet>
      <div className="createaccount__content">
        <h1 className="create-title">Créer un compte</h1>

        <form className="create-form" onSubmit={handleSubmit}>
          <label className="create-label">Nom :</label>
          <Field
            value={lastName}
            name="lastName"
            placeholder="Nom"
            type="text"
          />
          <label className="create-label">Prénom :</label>
          <Field
            value={firstName}
            name="firstName"
            placeholder="Prénom"
            type="text"
          />
          <label className="create-label">E-mail :</label>
          <Field
            value={email}
            name="email"
            placeholder="E-mail"
            type="email"
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
        <ToastContainer />
        <p>Vous avez déjà un compte ?<NavLink to="/connexion" className="create-id"> Identifiez-vous</NavLink></p>
      </div>
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
