/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import sleep from 'src/assets/images/trackers/icone-sommeil.svg';

import './modalsleep.scss';

const ModalSleep = ({ onClick }) => (
  <div className="modal-sleep">
    <img className="logo-sleep" src={sleep} alt="" />
    <h1 className="mod-title-sleep">Sommeil</h1>
    <form className="mod-form-sleep">
      <label className="mod-label-sleep">Heure de coucher :</label>
      <input className="mod-input-sleep" type="time" />
      <label className="mod-label-sleep">Heure de réveil :</label>
      <input className="mod-input-sleep" type="time" />
    </form>
    <button className="modal-button-sleep" onClick={ onClick }> Valider</button>
  </div>
);
export default ModalSleep;
