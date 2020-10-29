import React from 'react';
import add from 'src/assets/images/favorite.svg';

import './onearticle.scss';

const OneArticle = () => (
  <div className="one-article">
    <article>
      <img src="http://www.athletesdubienetre.fr/wp-content/uploads/sport-canin-selection-sports-avec-votre-chien.jpg" alt="article" className="one-article__img" />
      <h2 className="one-article__title">Titre du post</h2>
      <p className="one-article__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet optio adipisci sint possimus doloremque doloribus molestiae ab distinctio assumenda omnis? Blanditiis similique quidem maxime error? Aspernatur temporibus ex magnam quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet optio adipisci sint possimus doloremque doloribus molestiae ab distinctio assumenda omnis? Blanditiis similique quidem maxime error? Aspernatur temporibus ex magnam quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet optio adipisci sint possimus doloremque doloribus molestiae ab distinctio assumenda omnis? Blanditiis similique quidem maxime error? Aspernatur temporibus ex magnam quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet optio adipisci sint possimus doloremque doloribus molestiae ab distinctio assumenda omnis? Blanditiis similique quidem maxime error? Aspernatur temporibus ex magnam quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet optio adipisci sint possimus doloremque doloribus molestiae ab distinctio assumenda omnis? Blanditiis similique quidem maxime error? Aspernatur temporibus ex magnam quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet optio adipisci sint possimus doloremque doloribus molestiae ab distinctio assumenda omnis? Blanditiis similique quidem maxime error? Aspernatur temporibus ex magnam quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet optio adipisci sint possimus doloremque doloribus molestiae ab distinctio assumenda omnis? Blanditiis similique quidem maxime error? Aspernatur temporibus ex magnam quaerat.</p>
      <a href="#"><img className="one-article-fav" src={add} alt="add favorite" /></a>
    </article>
  </div>
);

export default OneArticle;
