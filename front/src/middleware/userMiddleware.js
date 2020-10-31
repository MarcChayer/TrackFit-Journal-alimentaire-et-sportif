/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  REGISTER_INPUT_SUBMIT,
  LOGIN_INPUT_SUBMIT,
  userIsConnected,
  userIsSubscribed,
} from '../actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER_INPUT_SUBMIT:
      // 'http://52.91.105.182/signup'
      axios.post('http://localhost:5050/signup', {
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
          console.log(error);
        });
      break;
    case LOGIN_INPUT_SUBMIT:
      // http://52.91.105.182
      axios.post('http://localhost:5050/login', {
        email: store.getState().user.email,
        password: store.getState().user.password,
      },
      { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          // console.log('res.data.session', res.data.session);
          // A faire : envoyer les variables de la session utilisateur
          // Attention ! mettre à jour l'action creator
          store.dispatch(userIsConnected(res.data.session));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};
