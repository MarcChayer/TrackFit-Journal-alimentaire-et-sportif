import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faSquare, faCheckSquare, faEdit } from '@fortawesome/free-regular-svg-icons';

const Todolist = () => (
  <div className="todolist">
    <div className="todolist__header">
      <h2>À faire</h2>
      <FontAwesomeIcon icon={faPlus} />
    </div>

    <ul className="todolist__items">
      <li className="todolist__item">
        <FontAwesomeIcon icon={faSquare} />
        <span>Tâche à faire</span>
        <FontAwesomeIcon icon={faEdit} />
        <FontAwesomeIcon icon={faTrashAlt} />
      </li>
      <li className="todolist__item">
        <FontAwesomeIcon icon={faSquare} />
        <span>Tâche à faire</span>
        <FontAwesomeIcon icon={faEdit} />
        <FontAwesomeIcon icon={faTrashAlt} />
      </li>
      <li className="todolist__item">
        <FontAwesomeIcon icon={faSquare} />
        <span>Tâche à faire</span>
        <FontAwesomeIcon icon={faEdit} />
        <FontAwesomeIcon icon={faTrashAlt} />
      </li>
      <li className="todolist__item">
        <FontAwesomeIcon icon={faSquare} />
        <span>Tâche à faire</span>
        <FontAwesomeIcon icon={faEdit} />
        <FontAwesomeIcon icon={faTrashAlt} />
      </li>
      <li className="todolist__item">
        <FontAwesomeIcon icon={faSquare} />
        <span>Tâche à faire</span>
        <FontAwesomeIcon icon={faEdit} />
        <FontAwesomeIcon icon={faTrashAlt} />
      </li>
      <li className="todolist__item">
        <FontAwesomeIcon icon={faSquare} />
        <span>Tâche à faire</span>
        <FontAwesomeIcon icon={faEdit} />
        <FontAwesomeIcon icon={faTrashAlt} />
      </li>
      <li className="todolist__item">
        <FontAwesomeIcon icon={faSquare} />
        <span>Tâche à faire</span>
        <FontAwesomeIcon icon={faEdit} />
        <FontAwesomeIcon icon={faTrashAlt} />
      </li>
      <li className="todolist__item todolist__item--done">
        <FontAwesomeIcon icon={faCheckSquare} />
        <span>Tâche à faire</span>
        <FontAwesomeIcon icon={faEdit} />
        <FontAwesomeIcon icon={faTrashAlt} />
      </li>
      <li className="todolist__item todolist__item--done">
        <FontAwesomeIcon icon={faCheckSquare} />
        <span>Tâche à faire</span>
        <FontAwesomeIcon icon={faEdit} />
        <FontAwesomeIcon icon={faTrashAlt} />
      </li>

      <li className="todolist__item todolist__item--done">
        <FontAwesomeIcon icon={faCheckSquare} />
        <span>Tâche à faire</span>
        <FontAwesomeIcon icon={faEdit} />
        <FontAwesomeIcon icon={faTrashAlt} />
      </li>
    </ul>
  </div>
);

// == Export
export default Todolist;
