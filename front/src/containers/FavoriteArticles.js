import { connect } from 'react-redux';
import FavoriteArticles from 'src/components/Dashboard/FavoriteArticles';
import {
  addArticleFav,
  deleteArticleFav,
} from '../actions/article';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  deleteOnClick: (articleId) => {
    // console.log('articleId', articleId);
    dispatch(deleteArticleFav(articleId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteArticles);
