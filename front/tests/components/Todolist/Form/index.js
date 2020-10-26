/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
// == Import npm
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// == Import
import './form.scss';

// == Composant
class Form extends Component {
  state = {}

  handleSubmit = (event) => {
    event.preventDefault();
    // Ici j'accède aux props passée via la variable de classe props
    // Donc la propriété fonction qui est un callback : onSubmit
    this.props.onSubmit && this.props.onSubmit(event);
  }

  render() {
    const { taskFormInputName, onInputChange } = this.props;
    return (
      <form className="formAddTask" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="formAddTask_input"
          value={taskFormInputName}
          onChange={onInputChange}
          placeholder="Ajouter une tâche"
        />
      </form>
    );
  }
}

Form.propTypes = {
  taskFormInputName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

// == Export
export default Form;
