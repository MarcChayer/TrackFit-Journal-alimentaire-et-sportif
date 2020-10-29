import React from 'react';
import PropTypes from 'prop-types';

import modalplus from 'src/assets/images/icones/icone-add-task.svg';
import modaltrash from 'src/assets/images/icones/icone-poubelle.svg';
import './todolist.scss';

const Todolist = ({ toDoList, addTask, submitAddTask }) => {
  if (!toDoList || !toDoList.tasks) {
    return <div>recuperation de la ressource</div>;
  }

  let addInputTask = false;
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('handleOnSubmit');
    submitAddTask();
  };

  const handleClick = (event) => {
    // action d'ajouter une tache (donc li qui contient input + icone)
    // addTask(event.target);
    event.preventDefault();
  };

  return (
    <div className="todolist">
      <div className="todolist__header">
        <h2>À faire</h2>
        <a href="" onClick={handleClick}>
          <img src={modalplus} alt="ajouter une tâche" className="todolist__modalplus-img" />
        </a>
      </div>

      <ul className="todolist__items">
        <form action="" method="post">
          {
            toDoList.tasks.map((task) => (
              <li className="todolist__item">
                <input type="checkbox" className="todolist__checkbox" />
                <span>{task.title}</span>
                <a href="#">
                  <img src={modaltrash} alt="supprimer une tâche" className="todolist__modaltrash-img" />
                </a>
              </li>
            ))
          }
        </form>
        <form onSubmit={handleOnSubmit} className="form">
          <input
            name="labelTask"
            className="form__input"
            type="text"
            placeholder="Ajouter une tâche"
            value={addTask}
            onChange={handleOnChange}
          />
        </form>
      </ul>
    </div>
  );
};

Todolist.propTypes = {
  toDoList: PropTypes.objectOf().isRequired,
  addTask: PropTypes.func.isRequired,
};

// == Export
export default Todolist;
