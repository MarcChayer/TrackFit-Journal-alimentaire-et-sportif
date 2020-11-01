export const ADD_ARTICLE_FAV = 'ADD_ARTICLE_FAV';
export const DELETE_ARTICLE_FAV = 'DELETE_ARTICLE_FAV';

export const addArticleFav = (articleId) => ({
  type: ADD_ARTICLE_FAV,
  articleId,
});

export const deleteArticleFav = (articleId) => ({
  type: DELETE_ARTICLE_FAV,
  articleId,
});
