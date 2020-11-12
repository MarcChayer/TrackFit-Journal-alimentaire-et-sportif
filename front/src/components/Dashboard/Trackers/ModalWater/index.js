/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import water from 'src/assets/images/trackers/icone-water.svg';

import './modalwater.scss';

const ModalWater = ({ onClick, setWater }) => {
  const [value, setValue] = React.useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    onClick();
    setWater({
      date: new Date(),
      water: value,
    });
  };

  return (
    <div className="modal-water">
      <img className="logo-water" src={water} alt="" />
      <h1 className="mod-title-water">Consommation d'eau</h1>
      <form className="mod-form-water" onSubmit={handleSubmit}>
        <label className="mod-label-water">Consommation d'eau (en cl) :</label>
        <input className="mod-input-water" type="number" min="0" max="400" value={value} onChange={(e) => setValue(e.target.value)} />
        <button className="modal-button-water">Valider</button>
      </form>
    </div>
  );
};

ModalWater.propTypes = {
  onClick: PropTypes.func.isRequired,
  setWater: PropTypes.func.isRequired,
};

export default ModalWater;
