/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import Food from 'src/assets/images/trackers/icone-alimentation.svg';

import './modalfood.scss';

const ModalFood = ({ onClick }) => (

  <div className="modal-food">
    <img className="logo-food" src={Food} alt="" />
    <h1 className="mod-title-food">Repas</h1>

    <form className="mod-form-food">

      <div className="mod-meal">
        <label className="mod-label-food">Petit déjeuner :</label>
        <input className="mod-input-food" type="text" />
      </div>
      <button className="button-cal" id="pdj-100" type="submit">100g</button>
      <button className="button-cal" id="pdj-250" type="submit">250g</button>
      <button className="button-cal" id="pdj-350" type="submit">350g</button>

      <div className="bloc-right-food">
        <div className="mod-meal">
          <label className="mod-label-food">Déjeuner :</label>
          <input className="mod-input-food" type="text" />
        </div>
        <button className="button-cal" id="dej-100" type="submit">100g</button>
        <button className="button-cal" id="dej-250" type="submit">250g</button>
        <button className="button-cal" id="dej-350" type="submit">350g</button>
      </div>

      <div className="mod-meal">
        <label className="mod-label-food">Collation :</label>
        <input className="mod-input-food" type="text" />
      </div>
      <button className="button-cal" id="coll-100" type="submit">100g</button>
      <button className="button-cal" id="coll-250" type="submit">250g</button>
      <button className="button-cal" id="coll-350" type="submit">350g</button>

      <div className="bloc-right-food">
        <div className="mod-meal">
          <label className="mod-label-food">Diner :</label>
          <input className="mod-input-food" type="text" />
        </div>
        <button className="button-cal" id="din-100" type="submit">100g</button>
        <button className="button-cal" id="din-250" type="submit">250g</button>
        <button className="button-cal" id="din-350" type="submit">350g</button>
      </div>
    </form>

    <div className="mod-cal-food">
      <label className="mod-label-food">Calories consommées :</label>
      <p className="mod-para2">x cal. consommées</p>
    </div>

    <button className="modal-button-food" onClick={onClick}> Valider</button>
  </div>
);
export default ModalFood;
