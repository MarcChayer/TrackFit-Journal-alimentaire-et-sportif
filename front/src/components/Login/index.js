import React from 'react';
import logo from 'src/assets/Logo_TrackFit_icone.svg';
import './style.scss';

const Login= () => (
  <login>
    <img src={logo} alt="trackFit" />
    <h1>S'identifier</h1>
    <form>
      <label>
       E-mail:
     <input type="text" mail="E-mail" />
      </label>
      <label>
      Mot de passe:
      <input type="text" mdp="Mot de passe" />
      </label>
      <input type="submit" value="S'indentifier" />
    </form>
  </login>
);
export default Login;
