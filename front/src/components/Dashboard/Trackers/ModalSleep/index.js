/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import iconsleep from 'src/assets/images/trackers/icone-sommeil.svg';

import './modalsleep.scss';

const ModalSleep = ({ onClick, setSleep }) => {
  const inputBedTime = useRef(null);
  const [sleepHours, setsleepHoursValue] = React.useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    onClick();
    setSleep({
      date: new Date(),
      sleepHours,
    });
  };
  return (
    <div className="modal-sleep">
      <img className="logo-sleep" src={iconsleep} alt="" />
      <h1 className="mod-title-sleep">Sommeil</h1>
      <form className="mod-form-sleep" onSubmit={handleSubmit}>
        <label className="mod-label-sleep">Heure de sommeil :</label>
        <input className="mod-input-sleep" type="number" name="sleepHours" ref={inputBedTime} value={sleepHours} min="0" max="24" onChange={(e) => setsleepHoursValue(e.target.value)} />
        <button className="modal-button-sleep"> Valider</button>
      </form>
    </div>
  );
};

ModalSleep.propTypes = {
  onClick: PropTypes.func.isRequired,
  setSleep: PropTypes.func.isRequired,
};
export default ModalSleep;
