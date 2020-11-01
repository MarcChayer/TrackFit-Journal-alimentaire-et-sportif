import React from 'react';
import sleep from 'src/assets/images/icones/icone-sommeil.svg';

import './modalsleep.scss';

const ModalSleep = ({ onClick }) => (

  <div className="modal-sleep">
    <img className="logo-sleep" src={sleep} alt="" />
    <h1 className="mod-title">Sommeil :</h1>
    <form className="mod-form">

      <label className="mod-label">Heure de sommeil nécessaire :</label>
      <input className="mod-input" type="text" />
      <label className="mod-label">Heure de couché :</label>
      <input className="mod-input" type="text" />
      <label className="mod-label">Heure de reveil :</label>
      <input className="mod-input" type="text" />

    </form>
    <button className="modal-button" onClick={ onClick }> Valider</button>
  </div>
);
export default ModalSleep;
