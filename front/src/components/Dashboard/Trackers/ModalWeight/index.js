import React from 'react';
import Weight from 'src/assets/images/trackers/icone-poids.svg';

import './modalweight.scss';

const ModalWeight = ({ onClick }) => (

  <div className="modal-weight">
    <img className="logo-weight" src={Weight} alt="" />
    <h1 className="mod-title">Poids :</h1>
    <form className="mod-form">
      <label className="mod-label">Dernière pesée :</label>
      <input className="mod-input" type="text" />
      <label className="mod-label">Poids actuel :</label>
      <input className="mod-input" type="text" />
    </form>
    <button className="modal-button" onClick={onClick}>Valider</button>
  </div>
);
export default ModalWeight;
