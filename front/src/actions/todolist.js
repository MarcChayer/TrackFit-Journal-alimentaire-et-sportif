export const ADD_TASK_INPUT_CHANGE = 'ADD_TASK_INPUT_CHANGE';
export const ADD_TASK_SUBMIT = 'ADD_TASK_SUBMIT';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_ERROR = 'ADD_TASK_ERROR';

export const addTaskInputChange = (payload) => ({
  type: ADD_TASK_INPUT_CHANGE,
  payload,
});

export const addTaskSubmit = () => ({
  type: ADD_TASK_SUBMIT,
});

export const addTaskSuccess = (payload) => ({
  type: ADD_TASK_SUCCESS,
  payload,
});

export const addTaskError = () => ({
  type: ADD_TASK_ERROR,
});
