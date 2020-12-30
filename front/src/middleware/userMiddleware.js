import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  CHECK_AUTH,
  loginSuccess,
  LOGIN_INPUT_SUBMIT,
  logoutSuccess,
  LOGOUT_HANDLER,
  paramsSuccess,
  PARAMS_INPUT_SUBMIT,
  REGISTER_INPUT_SUBMIT,
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
      axios.post('http://107.23.126.240/signup', {
        lastName: store.getState().user.lastName,
        firstName: store.getState().user.firstName,
        email: store.getState().user.email,
        password: store.getState().user.password,
        confirmedPassword: store.getState().user.confirmedPassword,
      })
        .then((res) => {
          // console.log('res.data', res.data);
          toast.success('Votre inscription est un succès, vous pouvez maintenant vous connecter.', { className:"toast__succes", position: toast.POSITION.TOP_RIGHT });
          store.dispatch(userIsSubscribed(res.data.userSave));
          // res.data.map((element) => {
          //   toast.success(element, { position: toast.POSITION.TOP_RIGHT });
          // })
        })
        .catch((error) => {
          error.response.data.map((element) => {
            toast.error(element, { className:"toast__error", position: toast.POSITION.TOP_RIGHT });
          });
          console.log(error.response.data);
        });
      break;
    case LOGIN_INPUT_SUBMIT:
      axios.post('http://107.23.126.240/login', {
        email: store.getState().user.email,
        password: store.getState().user.password,
      },
      { withCredentials: true })
        .then((res) => {
          store.dispatch(loginSuccess(res.data.user));
        })
        .catch((error) => {
          error.response.data.map((element) => {
            toast.error(element, { className:"toast__error", position: toast.POSITION.TOP_RIGHT });
          });
        });
      break;
    case LOGOUT_HANDLER:
      axios.post('http://107.23.126.240/logout', {},
        { withCredentials: true })
        .then((res) => {
          // console.log(res.data);
          store.dispatch(logoutSuccess());
        })
        .catch((error) => {
          // console.log(error);
        });
      break;
    case CHECK_AUTH:
      // console.log('CHECK_AUTH MIDDLEWARE');
      axios.post('http://107.23.126.240/isLogged', {},
        { withCredentials: true })
        .then((res) => {
          // console.log('CHECK_AUTH', res.data);
          if (res.data.isLogged === true) {
            store.dispatch(loginSuccess(res.data));
          }
        })
        .catch((error) => {
          // console.log(error);
        });
      break;
    case PARAMS_INPUT_SUBMIT:
      axios.patch(`http://107.23.126.240/profile/${userId}`, {
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
          // console.log('PARAMS_INPUT_SUBMIT', res.data);
          toast.success('Vos modifications ont bien été prises en compte.', { className:"toast__succes", position: toast.POSITION.TOP_RIGHT });
          store.dispatch(paramsSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
          toast.error('une erreur est survenue', { className:"toast__error", position: toast.POSITION.TOP_RIGHT });
        });
      break;
    default:
      next(action);
      // break;
  }
};
