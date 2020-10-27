/* eslint-disable no-case-declarations */
import axios from 'axios';
import { REGISTER_INPUT_SUBMIT, LOGIN_INPUT_SUBMIT, userIsConnected } from '../actions/user';

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
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case LOGIN_INPUT_SUBMIT:
      console.log('middleware loginInPutSubmit');
      // const userLogin = {
      //   email: store.getState().user.email,
      //   password: store.getState().user.password,
      // };
      axios.post('http://localhost:5050/login', {
        email: store.getState().user.email,
        password: store.getState().user.password,
      })
        .then((res) => {
          console.log(res.data);
          // A faire : envoyer les variables de la session utilisateur
          // Attention ! mettre à jour l'action creator
          store.dispatch(userIsConnected());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};
