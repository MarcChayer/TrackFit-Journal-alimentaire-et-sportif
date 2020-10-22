/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
import React from 'react';
import './style.scss';

const Login = () => (
  <div className="login">
    <h1>S'identifier</h1>

    <form className="formlog">
      <label>E-mail :
        <input className="log" type="text" placeholder="E-mail" />
      </label>
      <label>Mot de passe :
        <input className="log" type="text" placeholder="Mot de passe" />
      </label>
      <label>
        <input type="checkbox" />
        Rester connecté
      </label>
      <button type="submit">S'identifier</button>
    </form>

    <p>Vous ne possédez pas de compte ?<a className="id" href="/inscription"> Inscrivez-vous</a></p>
  </div>
);

export default Login;
