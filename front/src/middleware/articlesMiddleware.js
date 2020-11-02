/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  FETCH_ARTICLES,
  fetchArticlesSuccess,
  fetchArticlesError,
} from '../actions/articles';
import {
  ADD_ARTICLE_FAV,
  DELETE_ARTICLE_FAV,
} from '../actions/article';

export default (store) => (next) => (action) => {
  const userId = store.getState().dashboard.allData.id;
  console.log('user id article middle', userId);
  switch (action.type) {
    case FETCH_ARTICLES:
      // console.log(store.getState().router.params);
      axios.get('http://52.91.105.182/articles')
        .then((res) => {
          console.log(res.data);
          store.dispatch(fetchArticlesSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(fetchArticlesError());
        });
      break;
    case ADD_ARTICLE_FAV:
      // console.log('action.taskId', action.articleId);
      // http://52.91.105.182/
      axios.post(`http://52.91.105.182/user/${userId}/article/${action.articleId}`)
        .then((res) => {
          console.log(res.data);
          store.dispatch(res.data);
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(error);
        });
      break;
    case DELETE_ARTICLE_FAV:
      // console.log('action.taskId', action.articleId);
      // http://52.91.105.182/
      axios.delete(`http://52.91.105.182/user/${userId}/article/${action.articleId}`)
        .then((res) => {
          console.log(res.data);
          store.dispatch(res.data);
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(error);
        });
      break;
    default:
      next(action);
  }
};
