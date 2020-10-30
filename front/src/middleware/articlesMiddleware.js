/* eslint-disable no-case-declarations */
import axios from 'axios';
import { FETCH_ARTICLES, fetchArticlesSuccess, fetchArticlesError } from '../actions/articles';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      // console.log(store.getState().router.params);
      axios.get('http://localhost:5050/articles')
        .then((res) => {
          console.log(res.data);
          store.dispatch(fetchArticlesSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(fetchArticlesError());
        });
      break;
    default:
      next(action);
  }
};
