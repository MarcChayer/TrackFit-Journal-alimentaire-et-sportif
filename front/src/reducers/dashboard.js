import {
  FETCH_DASHBOARD_SUCCESS,
} from '../actions/dashboard';
import {
  ADD_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
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
      return {
        ...state,
        allData: {
          ...state.allData,
          tasks: [
            ...state.allData.tasks,
            action.payload,
          ],
        },
      };
    case DELETE_TASK_SUCCESS:
      // console.log(state.allData.tasks);
      return {
        ...state,
        allData: {
          ...state.allData,
          tasks: [
            ...action.payload,
          ],
        },
      };
    default:
      return state;
  }
};

export default reducer;
