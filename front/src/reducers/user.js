import {
  REGISTER_INPUT_SUBMIT,
  INPUT_CHANGE,
  LOGIN_INPUT_SUBMIT,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  USER_IS_SUBSCRIBED,
  PARAMS_SUCCESS,
} from '../actions/user';

const initialState = {
  id: null,
  lastName: '',
  firstName: '',
  email: '',
  password: '',
  confirmedPassword: '',
  birthdate: '',
  height: '',
  estimatedSleepTime: '',
  weightGoal: '',
  weight: '',
  isLogged: false,
  justSubscribe: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case REGISTER_INPUT_SUBMIT:
      return {
        ...state,
      };
    case INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    case LOGIN_INPUT_SUBMIT:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      // Ne pas oublier de récupérer le payload de l'action creator
      // (envoyé à partir de LOGIN_INPUT_SUBMIT)
      return {
        ...state,
        ...action.payload,
        isLogged: true,
        password: '',
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        id: null,
        lastName: '',
        firstName: '',
        email: '',
        password: '',
        isLogged: false,
      };
    case USER_IS_SUBSCRIBED:
      // Ne pas oublier de récupérer le payload de l'action creator
      // (envoyé à partir de REGISTER_INPUT_SUBMIT)
      return {
        ...state,
        id: null,
        lastName: '',
        firstName: '',
        email: '',
        password: '',
        confirmedPassword: '',
        isLogged: false,
        justSubscribe: true,
      };
    case PARAMS_SUCCESS:
      // console.log('PARAMS_SUCCESS', action.payload);
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
