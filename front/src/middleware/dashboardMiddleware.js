/* eslint-disable no-case-declarations */
import axios from 'axios';
import { FETCH_DASHBOARD, fetchDashboardSuccess } from '../actions/dashboard';

export default (store) => (next) => (action) => {
  const userId = store.getState().user.id;
  // const userId = store.getState().dashboard.allData.id;
  // console.log(userId);
  switch (action.type) {
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
    default:
      next(action);
  }
};
