import {
  ADD_TASK_INPUT_CHANGE,
} from '../actions/todolist';

const initialState = {
  labelNewTask: '',
  allData: {},
};

const reducer = (state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
    case ADD_TASK_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
