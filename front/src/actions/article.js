export const TOGGLE_FAV_ARTICLE = 'TOGGLE_FAV_ARTICLE';

export const toggleFavArticle = (articleId) => ({
  type: TOGGLE_FAV_ARTICLE,
  articleId,
});
