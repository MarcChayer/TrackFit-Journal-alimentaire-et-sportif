/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
import React from 'react';
import './login.scss';

const Login = () => (
  <div className="login">
    <h1 className="log-title">S'identifier</h1>

    <form className="log-form">
      <label className="log-label">E-mail :
        <input className="log-input" type="text" placeholder="E-mail" />
      </label>
      <label className="log-label">Mot de passe :
        <input className="log-input" type="text" placeholder="Mot de passe" />
      </label>
      <label className="log-label">
        <input type="checkbox" />
        Rester connecté
      </label>
      <button className="log-button" type="submit">S'identifier</button>
    </form>

    <p>Vous ne possédez pas de compte ?<a className="log-id" href="/inscription"> Inscrivez-vous</a></p>
  </div>
);

export default Login;
