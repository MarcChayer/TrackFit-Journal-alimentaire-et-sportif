import {
  FETCH_DASHBOARD_SUCCESS,
} from '../actions/dashboard';

const initialState = {
  allData: {},
};

const reducer = (state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
    case FETCH_DASHBOARD_SUCCESS:
      console.log('caseDashboardsucces');
      return {
        ...state,
        allData: { ...action.payload },
      };
    default:
      return state;
  }
};

export default reducer;
