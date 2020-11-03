import {
  FETCH_DASHBOARD_SUCCESS,
  SET_WATER_SUCCESS,
  SET_WEIGHT_SUCCESS,
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
        allData: {
          ...action.payload,
        },
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
      return {
        ...state,
        allData: {
          ...state.allData,
          tasks: [
            ...action.payload,
          ],
        },
      };
    case SET_WATER_SUCCESS:
      return {
        ...state,
        allData: {
          ...state.allData,
          waters: [
            ...state.allData.waters,
            action.payload,
          ],
        },
      };
    case SET_WEIGHT_SUCCESS:
      return {
        ...state,
        allData: {
          ...state.allData,
          weights: [
            ...state.allData.weights,
            action.payload,
          ],
        },
      };
    default:
      return state;
  }
};

export default reducer;
