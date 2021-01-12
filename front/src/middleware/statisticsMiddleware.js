/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  fetchStatisticsSuccess, FETCH_STATISTICS
} from '../actions/statistics';

export default (store) => (next) => (action) => {
  const userId = store.getState().user.id;

  const {
    type,
    payload,
  } = action;
  switch (type) {
    case FETCH_STATISTICS:
      axios.get(`http://107.23.126.240:8080/api/statistics/${userId}`, { withCredentials: true })
        .then((res) => {
          store.dispatch(fetchStatisticsSuccess(res.data));
        })
        .catch((error) => {
          // console.log(error);
        });
      break;
    default:
      next(action);
  }
};
