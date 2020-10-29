import React from 'react';
import logo from 'src/assets/images/icones/illustration-alimentation.svg';
import Article from './Article';

import './articles.scss';

const Articles = () => (

  <div className="articles">
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
