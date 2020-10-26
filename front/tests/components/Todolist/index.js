// == Import npm
import React, { Component } from 'react';

// == Import
import './todolist.scss';
import Form from 'src/components/Todolist/Form';
import Tasks from 'src/components/Todolist/Tasks';

import tasksData from 'src/data/tasks';

// == Composant
class TodoList extends Component {
  state = {
    tasks: [...tasksData],
    taskFormInputName: '',
  };

  getNbTaskInProgress = () => {
    const { tasks } = this.state;

    // Puis je récupère toutes les taches qui NE SONT PAS terminées
    const tasksInProgress = tasks.filter((task) => !task.done);
    // Et je les comptes
    return tasksInProgress.length;
  };

  addNewTask = () => {
    // La vie du manager
    const { tasks, taskFormInputName } = this.state;

    // 1 : Trouver l'id le plus haut
    // 1.1 : transposer notre tableau en tableau d'entier
    const ids = tasks.map((task) => task.id);

    // 1.2 déverse notre tableau dans la fonction Math.max()
    const maxId = Math.max(...ids);

    // 2 : On incrémente l'id le plus haut
    const newTaskId = maxId + 1;

    // Ajout de la nouvelle tache
    const newTask = {
      id: newTaskId,
      done: false,
      label: taskFormInputName,
    };

    // Ici je met à jour le state, disant
    this.setState({
      tasks: [
        // Ma clef tasks c'est toujours un tableau
        ...tasks, // Y'a toujours les anciennes taches dedans
        newTask, // J'ajoute la nouvelle tache à ce nouveau tableau
      ],
      taskFormInputName: '',
    });
  };

  onFormInputChange = (event) => {
    this.setState({
      taskFormInputName: event.target.value,
    });
  };

  onCheckboxChange = (id) => {
    const { tasks } = this.state;
    // On met à jour le tableau de taches
    const updatedTasks = tasks.map((task) => {
      // Pour faire ça on les parcours toutes
      // Et si on tombe sur celle qu'on vient de modifier
      if (task.id === id) {
        // On change la valeur de son done
        task.done = !task.done;
      }
      // Et dans tout les cas on retourne la tache
      return task;
    });

    this.setState({
      tasks: updatedTasks,
    });
  }

  render() {
    const { tasks, taskFormInputName } = this.state;
    return (
      <div className="todolist">
        <Form
          onSubmit={this.addNewTask}
          onInputChange={this.onFormInputChange}
          taskFormInputName={taskFormInputName}
        />
        <Counter nbTasksInProgress={this.getNbTaskInProgress()} />
        <Tasks tasks={tasks} onCheckboxChange={this.onCheckboxChange} />
      </div>
    );
  }
}

// == Export
export default TodoList;
