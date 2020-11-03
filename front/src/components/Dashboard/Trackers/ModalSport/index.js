/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import Sport from 'src/assets/images/trackers/icone-sport.svg';

import './modalsport.scss';

const ModalSport = ({ onClick }) => (

  <div className="modal-sport">
    <img className="logo-sport" src={Sport} alt="" />
    <h1 className="mod-title-sport">Activité physique</h1>
    <div className="mod-cal-sport">
      <label className="mod-label-sport">Dépense estimée :</label>
      <p className="mod-para">x cal. consommée</p>
    </div>
    <form className="mod-form-sport">
      <label className="mod-label-sport">Activité physique :</label>
      <input className="mod-input-sport" type="text" />
      <label className="mod-label-sport">Intensité :</label>
      <select className="mod-input-sport" name="intensities" id="intensity-select">
        <option value="1">Effort léger</option>
        <option value="2">Effort modéré</option>
        <option value="3">Effort intense</option>
      </select>
      <label className="mod-label-sport">Durée de la séance :</label>
      <input className="mod-input-sport" type="time" />
    </form>
    <button className="modal-button-sport" onClick={onClick}> Valider</button>
  </div>
);
export default ModalSport;
