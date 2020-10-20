import React from 'react';
import logo from 'src/assets/Logo_TrackFit_icone.svg';
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
        <input type="checkbox"/>
        Rester connecté
      </label>

      <button>S'identifier</button>
    </form>
    
  </div>
);

export default Login;
