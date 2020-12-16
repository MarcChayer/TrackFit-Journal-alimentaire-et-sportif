/* eslint-disable no-case-declarations */
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  toggleFavArticleSuccess,
  TOGGLE_FAV_ARTICLE,
} from '../actions/article';
import {
  fetchArticlesError, fetchArticlesSuccess,
  FETCH_ARTICLES
} from '../actions/articles';

export default (store) => (next) => (action) => {
  const userId = store.getState().dashboard.allData.id;
  toast.configure();
  switch (action.type) {
    case FETCH_ARTICLES:
      axios.get('http://52.91.105.182/articles', { withCredentials: true })
        .then((res) => {
          // console.log(res.data);
          store.dispatch(fetchArticlesSuccess(res.data));
        })
        .catch((error) => {
          // console.log(error);
          store.dispatch(fetchArticlesError(error));
        });
      break;
    case TOGGLE_FAV_ARTICLE:
      // console.log('action.articleId', action.articleId);
      // http://52.91.105.182/
      axios.get(`http://52.91.105.182/user/${userId}/article/${action.articleId}`, {},
        { withCredentials: true })
        .then((res) => {
          // console.log(res.data);
          store.dispatch(toggleFavArticleSuccess(res.data));
        })
        .catch((error) => {
          // console.log(error);
          // store.dispatch(error);
          toast.error('Vous devez être inscrit pour ajouter des articles.', { className:"toast__error", position: toast.POSITION.TOP_RIGHT });
        });
      next(action);
      break;
    default:
      next(action);
  }
};
