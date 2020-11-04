/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import sleep from 'src/assets/images/trackers/icone-sommeil.svg';
import PropTypes from 'prop-types';

import './modalsleep.scss';

const ModalSleep = ({
  onClick,
  handleTracker,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('soumission du formulaire sleep');
    onClick();
    handleTracker();
  };
  return (
    <div className="modal-sleep">
      <img className="logo-sleep" src={sleep} alt="" />
      <h1 className="mod-title-sleep">Sommeil</h1>
      <form className="mod-form-sleep" onSubmit={handleSubmit}>
        <label className="mod-label-sleep">Heure de coucher :</label>
        <input className="mod-input-sleep" type="time" />
        <label className="mod-label-sleep">Heure de réveil :</label>
        <input className="mod-input-sleep" type="time" />
        <button type="submit" className="modal-button-sleep"> Valider</button>
      </form>
    </div>
  );
};

ModalSleep.propTypes = {
  onClick: PropTypes.func.isRequired,
  handleTracker: PropTypes.func.isRequired,
};
export default ModalSleep;
