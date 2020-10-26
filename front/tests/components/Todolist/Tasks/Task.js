// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const Task = ({ id, done, label, onCheckboxChange }) => {
  let taskClassName = 'listContainer_task';
  if (done) {
    taskClassName += ' listContainer_task--done';
  }

  const handleOnCheckboxChange = () => {
    onCheckboxChange(id);
  };

  return (
    <div className={taskClassName}>
      <input
        type="checkbox"
        className="listContainer_taskCheckbox"
        checked={done}
        onChange={handleOnCheckboxChange}
      />
      <label className="listContainer_taskLabel">{label}</label>
    </div>
  );
};

Task.defaultProps = {
  done: false,
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool,
  onCheckboxChange: PropTypes.func.isRequired,
};

// == Export
export default Task;
