/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import FieldLogin from 'src/containers/Field';

import './login.scss';

const Login = ({
  email, password, handleLoginUser, isLogged,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('soumission du formulaire login');
    handleLoginUser();
  };

  // On vérifie si l'utilisateur n'est pas connecté
  // S'il n'est pas connecté => formulaire de Login
  if (!isLogged) {
    return (
      <div className="login">
        <h1 className="title">S'identifier</h1>

        <form className="formlog" onSubmit={handleSubmit}>
          <label>E-mail :
            <FieldLogin
              value={email}
              name="email"
              placeholder="E-mail"
            />
          </label>
          <label>Mot de passe :
            <FieldLogin
              value={password}
              name="password"
              placeholder="Mot de passe"
            />
          </label>
          {/* <label>
          <input type="checkbox" />
          Rester connecté
        </label> */}
          <button className="button" type="submit">S'identifier</button>
        </form>

        <p>Vous ne possédez pas de compte ?<a className="id" href="/inscription"> Inscrivez-vous</a></p>
      </div>
    );
  }

  // Sinon on le redirige vers son tableau de bord
  return (<Redirect to="/tableaudebord" />);
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleLoginUser: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Login;
