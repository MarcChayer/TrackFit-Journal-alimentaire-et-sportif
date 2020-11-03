/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  FETCH_DASHBOARD,
  SET_WATER,
  SET_WEIGHT,
  fetchDashboardSuccess,
  setWaterSuccess,
  setWeightSuccess,

} from '../actions/dashboard';

export default (store) => (next) => (action) => {
  const userId = store.getState().user.id;
  // const userId = store.getState().dashboard.allData.id;
  const {
    type,
    payload,
  } = action;

  console.log('middleware', action, userId);

  switch (type) {
    case FETCH_DASHBOARD:
      axios.get(`http://52.91.105.182/dashboard/${userId}`)
        .then((res) => {
          console.log(res.data);
          store.dispatch(fetchDashboardSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
          // store.dispatch(fetchArticlesError());
        });
      break;
    case SET_WATER:
      axios.post(`http://52.91.105.182/dashboard/${userId}/water`, payload)
        .then((res) => {
          store.dispatch(setWaterSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case SET_WEIGHT:
      axios.post(`http://52.91.105.182/dashboard/${userId}/weight`, payload)
        .then((res) => {
          store.dispatch(setWeightSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};
