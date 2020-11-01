import { connect } from 'react-redux';
import Article from 'src/components/Articles/Article';
import {
  addArticleFav,
  // deleteArticleFav,
} from '../actions/article';

const mapStateToProps = (state) => ({
  favArticles: state.dashboard.allData.articles,
});

const mapDispatchToProps = (dispatch) => ({
  addFavOnClick: (articleId) => {
    // console.log('articleId', articleId);
    dispatch(addArticleFav(articleId));
    // dispatch(deleteArticleFav(articleId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
