import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import logoAlimentation from 'src/assets/images/illustrations/illustration-alimentation.svg';
import logoBienEtre from 'src/assets/images/illustrations/illustration-bien-etre.svg';
import logoSport from 'src/assets/images/illustrations/illustration-sport.svg';
import Article from '../../containers/Article';
import './articles.scss';

const Articles = ({ fetchArticles, list, errorMessage }) => {
  useEffect(() => {
    fetchArticles();
  }, []);
  const { slug } = useParams();
  const articleList = list.filter((item) => (
    item.label === slug
  ));
  let logoImage = '';
  switch (slug) {
    case 'alimentation':
      logoImage = logoAlimentation;
      break;
    case 'sport':
      logoImage = logoSport;
      break;
    case 'bienetre':
      logoImage = logoBienEtre;
      break;
    default:
      logoImage = logoAlimentation;
  }

  return (
    <div className="articles">
      <Helmet defaultTitle="Articles">
        <title>Articles</title>
        <meta
          name="description"
          content="Articles"
        />
      </Helmet>
      {errorMessage}
      <ul className="articles__list">
        <img className="logo-category" src={logoImage} alt="aliment" />
        {
          articleList.map((article) => (
            <Article
              key={article.id}
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
