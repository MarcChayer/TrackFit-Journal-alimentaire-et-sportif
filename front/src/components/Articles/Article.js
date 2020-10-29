import React from 'react';
import add from 'src/assets/images/favorite.svg';

import './articles.scss';

const Article = () => (
  <li className="article">
    <article>
      <img src="http://www.athletesdubienetre.fr/wp-content/uploads/sport-canin-selection-sports-avec-votre-chien.jpg" alt="article" className="article__img" />
      <h2 className="article__title">Titre du post</h2>
      <p className="article__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet optio adipisci sint possimus doloremque doloribus molestiae ab distinctio assumenda omnis? Blanditiis similique quidem maxime error? Aspernatur temporibus ex magnam quaerat.</p>
      <a href="/article1" className="article__seemore">Voir plus</a>
      <a href="#"><img className="fav" src={add} alt="addfavorite" /></a>
    </article>
  </li>
);

export default Article;
