// == Import npm
import React from 'react';

// == Import style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const FavoriteArticles = () => (
  <ul className="favs">
    <h2>Articles favoris</h2>
    <li className="favs__item">
      <div className="favs__overview">
        <FontAwesomeIcon icon={faHeart} />
        <img src="http://www.athletesdubienetre.fr/wp-content/uploads/sport-canin-selection-sports-avec-votre-chien.jpg" alt="article" className="favs__thumbnail" />
      </div>
      <div className="favs__excerpt">
        <h3>article.title</h3>
        <p>article.content</p>
      </div>
    </li>

    <li className="favs__item">
      <div className="favs__overview">
        <FontAwesomeIcon icon={faHeart} />
        <img src="http://www.athletesdubienetre.fr/wp-content/uploads/sport-canin-selection-sports-avec-votre-chien.jpg" alt="article" className="favs__thumbnail" />
      </div>
      <div className="favs__excerpt">
        <h3>article.title</h3>
        <p>article.content</p>
      </div>
    </li>

    <li className="favs__item">
      <div className="favs__overview">
        <FontAwesomeIcon icon={faHeart} />
        <img src="http://www.athletesdubienetre.fr/wp-content/uploads/sport-canin-selection-sports-avec-votre-chien.jpg" alt="article" className="favs__thumbnail" />
      </div>
      <div className="favs__excerpt">
        <h3>article.title</h3>
        <p>article.content</p>
      </div>
    </li>

    <li className="favs__item">
      <div className="favs__overview">
        <FontAwesomeIcon icon={faHeart} />
        <img src="http://www.athletesdubienetre.fr/wp-content/uploads/sport-canin-selection-sports-avec-votre-chien.jpg" alt="article" className="favs__thumbnail" />
      </div>
      <div className="favs__excerpt">
        <h3>article.title</h3>
        <p>article.content</p>
      </div>
    </li>
  </ul>
);

// == Export
export default FavoriteArticles;
