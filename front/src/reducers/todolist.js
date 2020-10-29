import {
  REGISTER_TASK_SUBMIT,
} from '../actions/todolist';

const initialState = {
  addTask: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REGISTER_TASK_SUBMIT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
