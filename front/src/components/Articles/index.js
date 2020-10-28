import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import logo from 'src/assets/images/icones/illustration-alimentation.svg';

import Article from './Article';
import './articles.scss';

const Articles = ({ fetchArticles, list, errorMessage }) => {
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="articles">
      {errorMessage}
      <ul className="articles__list">
        <img className="logo-category" src={logo} alt="aliment" />
        {
          list.map((article) => (
            <Article
              article={article}
            />
          ))
        }
      </ul>
      <div className="more__articles">
        <a href="#">Afficher plus</a>
      </div>
    </div>
  );
};

Articles.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      source: PropTypes.string,
      media: PropTypes.string,
      label: PropTypes.string,
    }).isRequired,
  ).isRequired,
  fetchArticles: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

Articles.defaultProps = {
  errorMessage: null,
};

export default Articles;
