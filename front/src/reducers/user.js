import {
  REGISTER_INPUT_SUBMIT,
  INPUT_CHANGE,
  LOGIN_INPUT_SUBMIT,
  USER_IS_CONNECTED,
  USER_IS_SUBSCRIBED,
} from '../actions/user';

const initialState = {
  lastName: '',
  firstName: '',
  email: '',
  password: '',
  confirmedPassword: '',
  isLogged: false,
  session: {
    connected_user: false,
    email: '',
    firstName: '',
    lastName: '',
    id: null,
  },
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
    case USER_IS_CONNECTED:
      // Ne pas oublier de récupérer le payload de l'action creator
      // (envoyé à partir de LOGIN_INPUT_SUBMIT)
      console.log('action.session.connected_user dans USER AVEC USER IS CONNECTED', action.session.connected_user);
      return {
        ...state,
        isLogged: !state.isLogged,
        session: {
          ...action.session,
        },
      };
    case USER_IS_SUBSCRIBED:
      // Ne pas oublier de récupérer le payload de l'action creator
      // (envoyé à partir de REGISTER_INPUT_SUBMIT)
      console.log(action.session);
      return {
        ...state,
        isLogged: true,
        session: {
          ...action.session,
        },
      };
    default:
      return state;
  }
};
export default reducer;
