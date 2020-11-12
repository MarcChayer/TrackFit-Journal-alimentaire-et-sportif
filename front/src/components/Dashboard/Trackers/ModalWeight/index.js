/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import iconweight from 'src/assets/images/trackers/icone-poids.svg';

import './modalweight.scss';

const ModalWeight = ({ onClick, setWeight }) => {
  const [weight, setValue] = React.useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    onClick();
    setWeight({
      date: new Date(),
      weight,
    });
  };
  return (
    <div className="modal-weight">
      <img className="logo-weight" src={iconweight} alt="" />
      <h1 className="mod-title-weight">Poids</h1>
      <form className="mod-form-weight" onSubmit={handleSubmit}>
        <label className="mod-label-weight">Nouveau poids :</label>
        <input className="mod-input-weight" type="number" min="40" max="140" placeholder="80 kg" value={weight} onChange={(e) => setValue(e.target.value)} />
        <button className="modal-button-weight">Valider</button>
      </form>
    </div>
  );
};

ModalWeight.propTypes = {
  onClick: PropTypes.func.isRequired,
  setWeight: PropTypes.func.isRequired,
};

export default ModalWeight;
