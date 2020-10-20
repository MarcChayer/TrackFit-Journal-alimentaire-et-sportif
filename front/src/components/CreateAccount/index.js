import React from 'react';
import logo from 'src/assets/Logo_TrackFit_icone.svg';
import './style.scss';


const CreateAccount = () => (
<div className="createaccount">

  <img className="logotrackfit" src={logo} alt="trackFit" />
  <h1>Créer votre compte</h1>

  <form className="createform">
  
  <label>Votre nom :</label>
    <input className="create" type="text" placeholder="Nom" />
  
  <label>Votre prénom :</label>
    <input className="create" type="text" placeholder="prénom" />


  <label>E-mail:</label>
    <input className="create" type="text" placeholder="E-mail" />
  
  <label>Mot de passe:</label>
    <input className="create"type="text" placeholder="Mot de passe" />
  
  <label>Mot de passe à nouveau</label>
    <input className="create" type="text" placeholder="Mot de passe à nouveau" />

  <button>Créer votre compte</button>
  </form>

  <label>
    Vous avez déjà un compte? <a href = "#" > Identifiez-vous </a>
  </label>
  
</div>
);
export default CreateAccount;
