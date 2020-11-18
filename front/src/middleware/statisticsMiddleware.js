/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  FETCH_STATISTICS,
  fetchStatisticsSuccess,
} from '../actions/statistics';

export default (store) => (next) => (action) => {
  const userId = store.getState().user.id;

  const {
    type,
    payload,
  } = action;
  switch (type) {
    case FETCH_STATISTICS:
      axios.get(`http://52.91.105.182/statistics/${userId}`, { withCredentials: true })
        .then((res) => {
          store.dispatch(fetchStatisticsSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};
