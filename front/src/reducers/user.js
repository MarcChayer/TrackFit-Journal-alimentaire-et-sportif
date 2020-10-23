import { REGISTER_INPUT_SUBMIT } from '../actions/user';

const initialState = {
  lastName: 'toto',
  firstName: 'tata',
  email: 'toto@test.com',
  password: '123123',
  confirmedPassword: '123123',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REGISTER_INPUT_SUBMIT:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default reducer;
