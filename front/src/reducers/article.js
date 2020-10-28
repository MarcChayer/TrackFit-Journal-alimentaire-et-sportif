import {
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_ERROR,
} from '../actions/articles';

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
    default:
      return state;
  }
};
export default reducer;
