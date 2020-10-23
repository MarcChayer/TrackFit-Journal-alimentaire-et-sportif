import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Field = ({
  name,
  type,
  placeholder,
  value,
  onChange,
}) => {
  const handleOnChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      className="input"
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      required
    />
  );
};

Field.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
  type: 'text',
};

export default Field;
