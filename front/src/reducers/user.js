import {
  REGISTER_INPUT_SUBMIT,
  REGISTER_INPUT_CHANGE,
} from '../actions/user';

const initialState = {
  lastName: '',
  firstName: '',
  email: '',
  password: '',
  confirmedPassword: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REGISTER_INPUT_SUBMIT:
      return {
        ...state,
      };
    case REGISTER_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
