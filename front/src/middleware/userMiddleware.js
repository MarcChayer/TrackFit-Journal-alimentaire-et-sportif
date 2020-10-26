/* eslint-disable no-case-declarations */
import axios from 'axios';
import { REGISTER_INPUT_SUBMIT } from '../actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER_INPUT_SUBMIT:
      const user = {
        lastName: store.getState().user.lastName,
        firstName: store.getState().user.firstName,
        email: store.getState().user.email,
        password: store.getState().user.password,
        confirmedPassword: store.getState().user.confirmedPassword,
      };
      axios.post('http://52.91.105.182/signup', { user })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};
