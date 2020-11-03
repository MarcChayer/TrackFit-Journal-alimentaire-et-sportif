/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import water from 'src/assets/images/trackers/icone-water.svg';
import illuwater from 'src/assets/images/illustrations/illustration-water.svg';

import './modalwater.scss';

const ModalWater = ({ onClick }) => (

  <div className="modal-water">
    <img className="logo-water" src={water} alt="" />
    <img className="illu-water" src={illuwater} alt="" />
    <h1 className="mod-title-water">Consommation d'eau</h1>
    <form className="mod-form-water">
      <label className="mod-label-water">Consommation d'eau (en cl) :</label>
      <input className="mod-input-water" type="number" min="0" max="400" />
    </form>
    <button className="modal-button-water" onClick={onClick}>Valider</button>
  </div>
);
export default ModalWater;
