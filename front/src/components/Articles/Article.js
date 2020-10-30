import React from 'react';
import PropTypes from 'prop-types';
import add from 'src/assets/images/favorite.svg';

import './articles.scss';

const Article = ({ article }) => (
  <li className="article">
    <article>
      <img src={article.media} alt="article" className="article__img" />
      <h2 className="article__title">{article.title}</h2>
      <p className="article__excerpt">{article.content}</p>
      <a href={article.source} target="_blank" className="article__seemore">Voir l'article</a>
      <a href="#"><img className="fav" src={add} alt="addfavorite" /></a>
    </article>
  </li>
);

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
};

export default Article;
