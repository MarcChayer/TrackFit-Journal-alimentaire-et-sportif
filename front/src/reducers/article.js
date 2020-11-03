import {
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_ERROR,
} from '../actions/articles';
// import {
//   TOGGLE_FAV_ARTICLE,
// } from '../actions/article';

const initialState = {
  list: [],
  error: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
        error: null,
      };
    case FETCH_ARTICLES_ERROR:
      return {
        ...state,
        error: 'Aucun article ici',
      };
    // case TOGGLE_FAV_ARTICLE:
    //   console.log('action.articleId', ...action.articleId);
    //   return {
    //     ...state,
    //     articles: [...action.articleId],
    //   };
    default:
      return state;
  }
};
export default reducer;
