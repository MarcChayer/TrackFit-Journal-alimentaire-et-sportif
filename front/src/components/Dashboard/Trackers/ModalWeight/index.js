/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import Weight from 'src/assets/images/trackers/icone-poids.svg';

import './modalweight.scss';

const ModalWeight = ({ onClick }) => (

  <div className="modal-weight">
    <img className="logo-weight" src={Weight} alt="" />
    <h1 className="mod-title-weight">Poids</h1>
    <form className="mod-form-weight">
      <label className="mod-label-weight">Nouveau poids :</label>
      <input className="mod-input-weight" type="number" min="40" max="140" placeholder="80 kg" />
    </form>
    <button className="modal-button-weight" onClick={onClick}>Valider</button>
  </div>
);
export default ModalWeight;
