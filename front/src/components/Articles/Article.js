import React from 'react';
import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';

import './articles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Article = ({
  article,
  toggleFavArticle,
  favArticles,
}) => {
  // correspond a la liste d'article fav de l'user connecté
  console.log('favArticles', favArticles);

  const handleOnClick = () => {
    // console.log(event.target.dataset.articleId);
    // console.log(article.id);
    toggleFavArticle(article.id);
    // deleteOnClick(article.id);
  };
  return (
    <li className="article" key={article.id}>
      <article>
        <div className="favs__overview-one">
          <FontAwesomeIcon icon={faHeart} onClick={handleOnClick} />
          <img src={article.media} alt="article" className="article__img" />
        </div>
        <h2 className="article__title">{article.title}</h2>
        <p className="article__excerpt">{article.content}</p>

        <a href={article.source} target="_blank" className="article__seemore">Voir l'article</a>
      </article>
    </li>
  );
};

Article.propTypes = {
  article: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      source: PropTypes.string,
      media: PropTypes.string,
      label: PropTypes.string,
    }).isRequired,
  ).isRequired,
  favArticles: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      source: PropTypes.string,
      media: PropTypes.string,
      label: PropTypes.string,
    }).isRequired,
  ).isRequired,
  toggleFavArticle: PropTypes.func.isRequired,
};

export default Article;
