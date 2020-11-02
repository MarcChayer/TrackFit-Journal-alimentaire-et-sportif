// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './favoriteArticles.scss';

const FavoriteArticles = ({
  articleFav,
  addFavOnClick,
  deleteOnClick,
}) => {
  if (!articleFav || !articleFav.articles) {
    return <div>recuperation de la ressource</div>;
  }
  const handleOnClick = () => {
    // console.log(event.target.dataset.articleId);
    // console.log(article.id);
    console.log(articleFav.id);
    deleteOnClick(articleFav.id);
  };

  return (
    <ul className="favs">
      <div className="favs-content">
        <h2>Articles favoris</h2>
        {
          articleFav.articles.map((article) => (
            <li className="favs__item" key={article.id}>
              <div className="favs__overview">
                <FontAwesomeIcon icon={faHeart} onClick={handleOnClick} />
                <img src={article.media} alt="article" className="favs__thumbnail" />
              </div>
              <div className="favs__excerpt">
                <h3>{article.title}</h3>
                <p>{article.content}</p>
              </div>
            </li>
          ))
        }
      </div>
    </ul>
  );
};

FavoriteArticles.propTypes = {
  articleFav: PropTypes.objectOf().isRequired,
  addFavOnClick: PropTypes.func.isRequired,
  deleteOnClick: PropTypes.func.isRequired,
};

// == Export
export default FavoriteArticles;
