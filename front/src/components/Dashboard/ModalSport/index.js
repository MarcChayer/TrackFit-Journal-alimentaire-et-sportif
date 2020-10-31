import React from "react";
import Sport from 'src/assets/images/icones/icone-sport.svg';

import './modalsport.scss';

const ModalSport = ({ onClick }) => (

<div className="modal-sport">
<img className="logo-sport" src={Sport} alt="" />
<h1 className="mod-title">Activité :</h1>
<div className="mod-cal">
      <label className="mod-label">Dépense estimée :</label>
      <p className="mod-para">1680 cal. consommée</p>
</div>
<form className="mod-form">
      <label className="mod-label">Activité physique :</label>
      <input className="mod-input-sport" type="text"  />
      <label className="mod-label">Intensité :</label>
      <input className="mod-input-sport" type="text"  />
      <label className="mod-label">Durée de la séance :</label>
      <input className="mod-input-sport" type="text"  />
</form>
    <button className="modal-button"onClick={ onClick }> Valider</button>
</div>
);
export default ModalSport;
