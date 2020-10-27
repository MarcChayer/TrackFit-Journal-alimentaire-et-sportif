/* eslint-disable import/no-unresolved */
import React from 'react';

import modalplus from 'src/assets/images/icones/icone-add-task.svg';
import modaltrash from 'src/assets/images/icones/icone-poubelle.svg';

const Todolist = () => (
  <div className="todolist">
    <div className="todolist__header">
      <h2>À faire</h2>
      <a href=""> <img src={modalplus} alt="ajouter une tâche" className="modal-img" /> </a>
    </div>

    <ul className="todolist__items">
      <li className="todolist__item">
        <input type="checkbox" className="todolist__checkbox" />
        <span>Tâche à faire</span>
        <a href="#"><img src={modaltrash} alt="supprimer une tâche" className="todo-img" /></a>
      </li>
      <li className="todolist__item">
        <input type="checkbox" className="todolist__checkbox" />
        <span>Tâche à faire</span>
        <a href="#"><img src={modaltrash} alt="supprimer une tâche" className="todo-img" /></a>
      </li>
      <li className="todolist__item">
        <input type="checkbox" className="todolist__checkbox" />
        <span>Tâche à faire</span>
        <a href="#"><img src={modaltrash} alt="supprimer une tâche" className="todo-img" /></a>
      </li>
      <li className="todolist__item">
        <input type="checkbox" className="todolist__checkbox" />
        <span>Tâche à faire</span>
        <a href="#"><img src={modaltrash} alt="supprimer une tâche" className="todo-img" /></a>
      </li>
      <li className="todolist__item">
        <input type="checkbox" className="todolist__checkbox" />
        <span>Tâche à faire</span>
        <a href="#"><img src={modaltrash} alt="supprimer une tâche" className="todo-img" /></a>
      </li>
      <li className="todolist__item">
        <input type="checkbox" className="todolist__checkbox" />
        <span>Tâche à faire</span>
        <a href="#"><img src={modaltrash} alt="supprimer une tâche" className="todo-img" /></a>
      </li>
      <li className="todolist__item">
        <input type="checkbox" className="todolist__checkbox" />
        <span>Tâche à faire</span>
        <a href="#"><img src={modaltrash} alt="supprimer une tâche" className="todo-img" /></a>
      </li>
    </ul>
  </div>
);

// == Export
export default Todolist;
