import React from 'react';
import logo from 'src/assets/images/illustration-alimentation.svg';
import Article from './Article';
import './articles.scss';

const Articles = () => (

  <div className="articles">
    <h1 className="posts__title">Notre sélection d'articles portant sur l'alimentation :</h1>
    <ul className="articles__list">
      <img className="logo-category" src={logo} alt="aliment" />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </ul>
    <div className="more__articles">
      <a href="#">Afficher plus</a>
    </div>
  </div>

);

export default Articles;
