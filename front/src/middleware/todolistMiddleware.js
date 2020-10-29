/* eslint-disable no-case-declarations */
import axios from 'axios';
import { ADD_TASK_SUBMIT, addTaskSuccess, addTaskError } from '../actions/todolist';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_TASK_SUBMIT:
      // console.log('middleware todolist');
      axios.post('http://localhost:5050/dashboard/1/task', {
        title: store.getState().todolist.labelNewTask,
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(addTaskSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(addTaskError(error));
        });
      break;
    default:
      next(action);
  }
};
