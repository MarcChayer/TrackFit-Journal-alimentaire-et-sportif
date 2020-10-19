import React from 'react';
import logo from 'src/assets/Logo_TrackFit_icone.svg';
import './style.scss';


const CreateAccount = () => (
<createAccount>
  <img src={logo} alt="trackFit" />
  <h1>Créer votre compte</h1>
  <form>
  <label>
    Votre nom :
    <input type="text" name="name" />
  </label>
  <label>
    E-mail:
    <input type="text" mail="E-mail" />
  </label>
  <label>
    Mot de passe:
    <input type="text" mdp="Mot de passe" />
  </label>
  <label>
    Mot de passe à nouveau :
    <input type="text" mdpn="Mot de passe à nouveau" />
  </label>
  <input type="submit" value="Créer votre compte" />
  </form>
  <p>Vous possèdez déjà un compte? <li><a href="#">Identifiez-vous</a></li></p>
</createAccount>
);
export default CreateAccount;
