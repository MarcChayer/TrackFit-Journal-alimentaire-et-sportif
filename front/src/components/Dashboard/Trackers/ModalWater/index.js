import React from "react";
import sleep from 'src/assets/images/trackers/icone-water.svg';

import './modalwater.scss';

const ModalWater = ({ onClick }) => (

<div className="modal-water">
<img className="logo-water" src={sleep} alt="" />
<h1 className="mod-title">Eau :</h1>
    <form className="mod-form">
      <label className="mod-label">Eau consommés hier :</label>
      <input className="mod-input" type="text"  />
      <label className="mod-label">Eau consommés aujourd'hui :</label>
      <input className="mod-input" type="text"  />
    
     
    </form>
    <button className="modal-button"onClick={ onClick }>Valider</button>
</div>
);
export default ModalWater;
