import React from "react";
import Food from 'src/assets/images/icones/icone-alimentation.svg';

import './modalfood.scss';

const ModalFood = ({ onClick }) => (

<div className="modal-food">
<img className="logo-food" src={Food} alt="" />
<h1 className="mod-title">Repas de la journée :</h1>
   
  <form className="mod-form-food">

    
      <div className="mod-meal">
       <label className="mod-label-food">Petit déjeuner :</label>
       <input className="mod-input-food" type="text"  />
      </div>
       <input className="button-cal"type="button" disabled="disabled"/>
       <input className="button-cal"type="button" disabled="disabled"/>
        <input className="button-cal"type="button" disabled="disabled"/>
    

    <div className="bloc-right-food">
    <div className="mod-meal">
      <label className="mod-label-food">Déjeuner :</label>
      <input className="mod-input-food" type="text"  />
    </div> 
      <input className="button-cal"type="button" disabled="disabled"/>
      <input className="button-cal"type="button" disabled="disabled"/>
      <input className="button-cal"type="button" disabled="disabled"/>
    </div>


    <div className="mod-meal">
      <label className="mod-label-food">Collation :</label>
      <input className="mod-input-food" type="text"  />
    </div> 
      <input className="button-cal"type="button" disabled="disabled"/>
      <input className="button-cal"type="button" disabled="disabled"/>
      <input className="button-cal"type="button" disabled="disabled"/>
    
    <div className="bloc-right-food">
    <div className="mod-meal">
      <label className="mod-label-food">Diner :</label>
      <input className="mod-input-food" type="text"  />
    </div> 
      <input className="button-cal"type="button" disabled="disabled"/>
      <input className="button-cal"type="button" disabled="disabled"/>
      <input className="button-cal"type="button" disabled="disabled"/>
      </div>
  </form>

    <div className="mod-cal-food">
      <label className="mod-label-food">Dépense estimée :</label>
      <p className="mod-para2">1680 cal. consommée</p>
    </div>

    <button className="modal-button"onClick={ onClick }> Valider</button>
</div>
);
export default ModalFood;

