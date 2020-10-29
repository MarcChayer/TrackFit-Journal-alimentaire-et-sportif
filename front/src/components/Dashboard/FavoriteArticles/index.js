// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './favoriteArticles.scss';

const FavoriteArticles = ({ articleFav }) => { 
  if (!articleFav || !articleFav.articles) {
    return <div>recuperation de la ressource</div>;
  }
  return (
    <ul className="favs">
      <h2>Articles favoris</h2>
      {
        articleFav.articles.map((articles) => (
          <li className="favs__item">
            <div className="favs__overview">
              <FontAwesomeIcon icon={faHeart} />
              <img src={articles.media} alt="article" className="favs__thumbnail" />
            </div>
            <div className="favs__excerpt">
              <h3>{articles.title}</h3>
              <p>{articles.content}</p>
            </div>
          </li>
        ))
      }
    </ul>
  );
};
FavoriteArticles.propTypes = {
  articleFav: PropTypes.objectOf().isRequired,
};

// == Export
export default FavoriteArticles;
