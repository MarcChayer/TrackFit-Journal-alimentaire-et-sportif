import {
  TRACKER_INPUT_SUBMIT,
} from '../actions/trackers';

const initialState = {
  estimatedSleepTime: '',
  
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TRACKER_INPUT_SUBMIT:
      console.log('state', ...state);
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default reducer;
