import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './articles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Article = ({ article }) => {
  console.log('je suis la source', article.source);
  return (
    <li className="article">
      <article>
        <div className="favs__overview-one">
          <NavLink to="/favoris"><FontAwesomeIcon icon={faHeart} /></NavLink>
          <img src={article.media} alt="article" className="article__img" />
        </div>
        <h2 className="article__title">{article.title}</h2>
        <p className="article__excerpt">{article.content}</p>

        <a href={article.source} target="_blank" className="article__seemore">Voir l'article</a>
        {/*
          <Link to={article.source} target="_blank" className="article__seemore">Voir l'article</Link> */}
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
};

export default Article;
