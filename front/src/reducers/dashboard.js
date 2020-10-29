import {
  FETCH_DASHBOARD_SUCCESS,
} from '../actions/dashboard';
import {
  ADD_TASK_SUCCESS,
} from '../actions/todolist';

const initialState = {
  allData: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_DASHBOARD_SUCCESS:
      return {
        ...state,
        allData: { ...action.payload },
      };
    case ADD_TASK_SUCCESS:
      const test = state.allData.tasks.push(action.payload);
      console.log(test);
      return {
        ...state,
        allData: {
          ...state.allData,
          // tasks: {
          //   ...state.allData.tasks,
          //   ...action.payload,
          // },
        },
      };
    default:
      return state;
  }
};

export default reducer;
