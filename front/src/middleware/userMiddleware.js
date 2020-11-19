/* eslint-disable no-case-declarations */
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  CHECK_AUTH, loginSuccess, LOGIN_INPUT_SUBMIT,
  logoutSuccess,
  LOGOUT_HANDLER,
  paramsSuccess, PARAMS_INPUT_SUBMIT, REGISTER_INPUT_SUBMIT,
  userIsSubscribed
} from '../actions/user';

export default (store) => (next) => (action) => {
  // console.log('middlewareUser');
  const userId = store.getState().user.id;

  toast.configure();
  // console.log(userId);
  switch (action.type) {
    case REGISTER_INPUT_SUBMIT:
      // 'http://52.91.105.182/signup'
      axios.post('http://52.91.105.182/signup', {
        lastName: store.getState().user.lastName,
        firstName: store.getState().user.firstName,
        email: store.getState().user.email,
        password: store.getState().user.password,
        confirmedPassword: store.getState().user.confirmedPassword,
      })
        .then((res) => {
          console.log(res.data);
          console.log('res.data.userSave', res.data.userSave);
          // A faire : envoyer les variables de la session utilisateur
          // Attention ! mettre à jour l'action creator
          store.dispatch(userIsSubscribed(res.data.userSave));
        })
        .catch((error) => {
          console.log(error.response.data);
          // store.dispatch(messageError(error.response.data));
          error.response.data.map((element) => {
            toast.error(element, { position: toast.POSITION.TOP_RIGHT });
          });
        });
      break;
    case LOGIN_INPUT_SUBMIT:
      axios.post('http://52.91.105.182/login', {
        email: store.getState().user.email,
        password: store.getState().user.password,
      },
      { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          // console.log('res.data.session', res.data.session);
          // A faire : envoyer les variables de la session utilisateur
          // Attention ! mettre à jour l'action creator
          store.dispatch(loginSuccess(res.data.user));
        })
        .catch((error) => {
          console.log(error);
          error.response.data.map((element) => {
            toast.error(element, { position: toast.POSITION.TOP_RIGHT });
          });
        });
      break;
    case LOGOUT_HANDLER:
      axios.post('http://52.91.105.182/logout', {},
        { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          // A faire : envoyer les variables de la session utilisateur
          // Attention ! mettre à jour l'action creator
          store.dispatch(logoutSuccess());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case CHECK_AUTH:
      // console.log('CHECK_AUTH MIDDLEWARE');
      axios.post('http://52.91.105.182/isLogged', {},
        { withCredentials: true })
        .then((res) => {
          console.log('CHECK_AUTH', res.data);
          // A faire : envoyer les variables de la session utilisateur
          // Attention ! mettre à jour l'action creator
          if (res.data.isLogged === true) {
            store.dispatch(loginSuccess(res.data));
          }
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case PARAMS_INPUT_SUBMIT:
      axios.patch(`http://52.91.105.182/profile/${userId}`, {
        lastName: store.getState().user.lastName,
        firstName: store.getState().user.firstName,
        birthdate: store.getState().user.birthdate,
        height: store.getState().user.height,
        estimatedSleepTime: store.getState().user.estimatedSleepTime,
        weightGoal: store.getState().user.weightGoal,
        weight: store.getState().user.weight,
      },
      { withCredentials: true })
        .then((res) => {
          console.log('PARAMS_INPUT_SUBMIT', res.data);
          // A faire : envoyer les variables de la session utilisateur
          // Attention ! mettre à jour l'action creator
          store.dispatch(paramsSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
      // break;
  }
};
