/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useRef } from 'react';
import sleep from 'src/assets/images/trackers/icone-sommeil.svg';
import PropTypes from 'prop-types';

import './modalsleep.scss';

const ModalSleep = ({
  onClick,
  setSleep,
}) => {
  const inputBedTime = useRef(null);
  const inputWakeUpTime = useRef(null);
  const [bedTimeValue, setBedTimeValue] = React.useState(0);
  const [WakeUpTimeValue, setWakeUpTimeValue] = React.useState(0);
  const onValidate = React.useCallback(() => {
    setSleep({
      date: new Date(),
      bedTime: bedTimeValue,
      wakeUpTime: WakeUpTimeValue,
    });
    onClick();
  }, [bedTimeValue, WakeUpTimeValue]);

  return (
    <div className="modal-sleep">
      <img className="logo-sleep" src={sleep} alt="" />
      <h1 className="mod-title-sleep">Sommeil</h1>
      <form className="mod-form-sleep">
        <label className="mod-label-sleep">Heure de coucher :</label>
        <input className="mod-input-sleep" type="time" name="bedTime" ref={inputBedTime} value={bedTimeValue} onChange={(e) => setBedTimeValue(e.target.value)} />
        <label className="mod-label-sleep">Heure de réveil :</label>
        <input className="mod-input-sleep" type="time" name="wakeUpTime" ref={inputWakeUpTime} value={WakeUpTimeValue} onChange={(e) => setWakeUpTimeValue(e.target.value)} />
        <button className="modal-button-sleep" type="button" onClick={onValidate}> Valider</button>
      </form>
    </div>
  );
};

ModalSleep.propTypes = {
  onClick: PropTypes.func.isRequired,
  setSleep: PropTypes.func.isRequired,
};
export default ModalSleep;
