/* eslint-disable no-case-declarations */
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FETCH_DASHBOARD,
  SET_WATER,
  SET_WEIGHT,
  SET_SLEEP,
  fetchDashboardSuccess,
  setWaterSuccess,
  setWeightSuccess,
  setSleepSuccess,
} from '../actions/dashboard';

export default (store) => (next) => (action) => {
  const userId = store.getState().user.id;
  toast.configure();
  const {
    type,
    payload,
  } = action;
  switch (type) {
    case FETCH_DASHBOARD:
      axios.get(`http://3.90.247.93:8080/api/dashboard/${userId}`, { withCredentials: true })
        .then((res) => {
          store.dispatch(fetchDashboardSuccess(res.data));
        })
        .catch((error) => {
          // console.log(error);
          toast.error('Une erreur est survenue.', { className:"toast__error", position: toast.POSITION.TOP_RIGHT });
        });
      break;
    case SET_WATER:
      axios.post(`http://3.90.247.93:8080/api/dashboard/${userId}/water`, payload, { withCredentials: true })
        .then((res) => {
          store.dispatch(setWaterSuccess(res.data));
        })
        .catch((error) => {
          // console.log(error);
          toast.error('Une erreur est survenue.', { className:"toast__error", position: toast.POSITION.TOP_RIGHT });
        });
      break;
    case SET_WEIGHT:
      axios.post(`http://3.90.247.93:8080/api/dashboard/${userId}/weight`, payload, { withCredentials: true })
        .then((res) => {
          store.dispatch(setWeightSuccess(res.data));
        })
        .catch((error) => {
          // console.log(error);
          toast.error('Une erreur est survenue.', { className:"toast__error", position: toast.POSITION.TOP_RIGHT });
        });
      break;
    case SET_SLEEP:
      axios.post(`http://3.90.247.93:8080/api/dashboard/${userId}/sleep`, payload)
        .then((res) => {
          store.dispatch(setSleepSuccess(res.data));
        })
        .catch((error) => {
          toast.error('Une erreur est survenue.', { className:"toast__error", position: toast.POSITION.TOP_RIGHT });
        });
      break;
    default:
      next(action);
  }
};
