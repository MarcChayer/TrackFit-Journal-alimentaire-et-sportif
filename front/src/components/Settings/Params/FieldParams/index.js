import React from 'react';
import PropTypes from 'prop-types';

import './field.scss';

const FieldParams = ({
  name,
  type,
  placeholder,
  value,
  changeField,
}) => {
  const handleOnChange = (event) => {
    // console.log(event.target.value);
    changeField(event.target.value, event.target.name);
  };

  return (
    <input
      className="create-input"
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
    />
  );
};

FieldParams.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
};

FieldParams.defaultProps = {
  type: 'text',
};

export default FieldParams;
