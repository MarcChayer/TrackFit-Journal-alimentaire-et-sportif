/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
import React from 'react';
import logo from 'src/assets/images/logo.svg';
import './style.scss';

const Login = () => (
  <div className="login">
    <img className="logotrackfit" src={logo} alt="trackFit" />
    <h1>S'identifier</h1>

    <form className="formlog">
      <label>E-mail:</label>
      <input className="log" type="text" placeholder="E-mail" />
      <label>Mot de passe:</label>
      <input className="log" type="text" placeholder="Mot de passe" />
      <label>
        <input type="checkbox" />
        Rester connecté
      </label>
      <button type="submit">S'identifier</button>
    </form>

    <p>Vous ne possèdez pas de compte?<a className="id" href="#"> Inscrivez-vous</a></p>
  </div>
);

export default Login;
