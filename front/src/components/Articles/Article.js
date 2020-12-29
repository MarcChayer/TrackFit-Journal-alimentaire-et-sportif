import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { ToastContainer } from 'react-toastify';
// import { NavLink } from 'react-router-dom';
import './articles.scss';

const Article = ({
  article,
  toggleFavArticle,
  colorFavArticles,
}) => {
  // correspond a la liste d'article fav de l'user connecté
  // console.log('colorFavArticles', colorFavArticles);
  const handleOnClick = () => {
    toggleFavArticle(article.id);
  };
  return (
    <li className="article" key={article.id}>
      <article>
        <div className={colorFavArticles.includes(article.id) ? 'favs__overview-one favs__overview-selected' : 'favs__overview-one'}>
          <FontAwesomeIcon icon={faHeart} onClick={handleOnClick} />
          <img src={article.media} alt="article" className="article__img" />
        </div>
        <h2 className="article__title">{article.title}</h2>
        <p className="article__excerpt">{article.content}</p>

        <a href={article.source} target="_blank" className="article__seemore">Voir l'article</a>
      </article>
      <ToastContainer />
    </li>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
  colorFavArticles: PropTypes.arrayOf(
    PropTypes.number,
  ).isRequired,
  toggleFavArticle: PropTypes.func.isRequired,
};

export default Article;
