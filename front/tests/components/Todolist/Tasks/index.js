/* eslint-disable max-len */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './tasks.scss';
import Task from './Task';

// == Composant
const Tasks = ({ tasks, onCheckboxChange }) => (
  <div className="listContainer">
    {tasks.map((task) => (
      <Task key={`task-${task.id}`} {...task} onCheckboxChange={onCheckboxChange} />
    ))}
  </div>
);

/**
 *  Ici pas de valeur donnée, mais la propriété est là alors, cette propriété vaut true
    <Task name="Ma tache 1" done />
 *  Ici la valeur est donnée explicitement, mais eslint gueule parcequ'on est pas obligé de lui donner
    <Task name="Ma tache 2" done={true} />
 *  Ici la prop n'est carrément pas donnée, alors on prends sa valeur par défaut ( le defaultProps du composant )
    <Task name="Ma tache 3" />
 *  Ici la valeur est donnée à false, il n'y a pas d'autre facon de lui donner autre chose que true
    <Task name="Ma tache 4" done={false} />
 */

// J'attends la déclaration des propTypes pour la propriété tasks qui a cette forme :
// Exemple :
// [{
//     id: 1,
//     label: 'Coder une todolist en impératif',
//     done: true,
// }]

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
};

// == Export
export default Tasks;
