// eslint-disable-next-line max-len
// == Import npm
import React from 'react';
import profilePicture from 'src/assets/images/profile.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWeight, faRunning, faBed, faTint, faCarrot, faHeart, faPlus, faTrashAlt, faCircle,
} from '@fortawesome/free-solid-svg-icons';

import {
  faSquare, faCheckSquare, faEdit,
} from '@fortawesome/free-regular-svg-icons';

// == Import
import './style.scss';
import food from 'src/assets/images/food.svg';
import water from 'src/assets/images/water.svg';
import sleep from 'src/assets/images/sleep.svg';
import sport from 'src/assets/images/sport.svg';
import weight from 'src/assets/images/weight.svg';

// == Composant
const Dashboard = () => (
  <div className="dashboard">
    {/* div qui englobe le dashboard */}

    <div className="dashboard__menu">
      {/* div qui englobe le header (menu) du dashboard */}
      <ul className="dashboard__menu-list">
        <li className="dashboard__menu-item dashboard__menu-item--active">
          <a href="/tableaudebord" className="dashboard__menu-link">Tableau de bord</a>
        </li>
        <li className="dashboard__menu-item">
          <a href="/statistiques" className="dashboard__menu-link">Statistiques</a>
        </li>
        <li className="dashboard__menu-item">
          <a href="/parametres" className="dashboard__menu-link">Paramètres</a>
        </li>
      </ul>
    </div>

    <div className="dashboard__content">
      {/* div qui englobe le contenu du dashboard */}

      <div className="dashboard__left">
        <ul className="trackers">
          <li className="trackers__item">
            <img src={food} alt="food" className="trackers__img" />
            <h3>Nutrition</h3>
            <p>Tracker Nutrition</p>
          </li>
          <li className="trackers__item">
            <img src={water} alt="water" className="trackers__img" />
            <h3>Hydratation</h3>
            <p>Tracker Hydratation</p>
          </li>
          <li className="trackers__item">
            <img src={sleep} alt="sleep" className="trackers__img" />
            <h3>Sommeil</h3>
            <p>Tracker Sommeil</p>
          </li>
          <li className="trackers__item">
            <img src={sport} alt="sport" className="trackers__img" />
            <h3>Activité</h3>
            <p>Tracker Activité</p>
          </li>
          <li className="trackers__item">
            <img src={weight} alt="weight" className="trackers__img" />
            <h3>Poids</h3>
            <p>Tracker Poids</p>
          </li>
        </ul>

        <div className="favs-todo">
          <ul className="favs">
            <h2>Articles favoris</h2>
            <li className="favs__item">
              <div className="favs__overview">
                <FontAwesomeIcon icon={faHeart} />
                <img src={`${profilePicture}`} alt="Star" className="favs__thumbnail" />
              </div>
              <div className="favs__excerpt">
                <h3>Titre de l'article</h3>
                <p>Résumé de l'article lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </li>
            <li className="favs__item">
              <div className="favs__overview">
                <FontAwesomeIcon icon={faHeart} />
                <img src={`${profilePicture}`} alt="Star" className="favs__thumbnail" />
              </div>
              <div className="favs__excerpt">
                <h3>Titre de l'article</h3>
                <p>Résumé de l'article lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </li>
            <li className="favs__item">
              <div className="favs__overview">
                <FontAwesomeIcon icon={faHeart} />
                <img src={`${profilePicture}`} alt="Star" className="favs__thumbnail" />
              </div>
              <div className="favs__excerpt">
                <h3>Titre de l'article</h3>
                <p>Résumé de l'article lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </li>
            <li className="favs__item">
              <div className="favs__overview">
                <FontAwesomeIcon icon={faHeart} />
                <img src={`${profilePicture}`} alt="Star" className="favs__thumbnail" />
              </div>
              <div className="favs__excerpt">
                <h3>Titre de l'article</h3>
                <p>Résumé de l'article lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </li>
            <li className="favs__item">
              <div className="favs__overview">
                <FontAwesomeIcon icon={faHeart} />
                <img src={`${profilePicture}`} alt="Star" className="favs__thumbnail" />
              </div>
              <div className="favs__excerpt">
                <h3>Titre de l'article</h3>
                <p>Résumé de l'article lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </li>
            <li className="favs__item">
              <div className="favs__overview">
                <FontAwesomeIcon icon={faHeart} />
                <img src={`${profilePicture}`} alt="Star" className="favs__thumbnail" />
              </div>
              <div className="favs__excerpt">
                <h3>Titre de l'article</h3>
                <p>Résumé de l'article lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </li>
          </ul>

          <div className="todolist">
            <div className="todolist__header">
              <h2>À faire</h2>
              <FontAwesomeIcon icon={faPlus} />
            </div>

            <ul className="todolist__items">
              <li className="todolist__item">
                <FontAwesomeIcon icon={faSquare} />
                <span>Tâche à faire</span>
                <FontAwesomeIcon icon={faEdit} />
                <FontAwesomeIcon icon={faTrashAlt} />
              </li>
              <li className="todolist__item">
                <FontAwesomeIcon icon={faSquare} />
                <span>Tâche à faire</span>
                <FontAwesomeIcon icon={faEdit} />
                <FontAwesomeIcon icon={faTrashAlt} />
              </li>
              <li className="todolist__item">
                <FontAwesomeIcon icon={faSquare} />
                <span>Tâche à faire</span>
                <FontAwesomeIcon icon={faEdit} />
                <FontAwesomeIcon icon={faTrashAlt} />
              </li>
              <li className="todolist__item">
                <FontAwesomeIcon icon={faSquare} />
                <span>Tâche à faire</span>
                <FontAwesomeIcon icon={faEdit} />
                <FontAwesomeIcon icon={faTrashAlt} />
              </li>
              <li className="todolist__item">
                <FontAwesomeIcon icon={faSquare} />
                <span>Tâche à faire</span>
                <FontAwesomeIcon icon={faEdit} />
                <FontAwesomeIcon icon={faTrashAlt} />
              </li>
              <li className="todolist__item">
                <FontAwesomeIcon icon={faSquare} />
                <span>Tâche à faire</span>
                <FontAwesomeIcon icon={faEdit} />
                <FontAwesomeIcon icon={faTrashAlt} />
              </li>
              <li className="todolist__item">
                <FontAwesomeIcon icon={faSquare} />
                <span>Tâche à faire</span>
                <FontAwesomeIcon icon={faEdit} />
                <FontAwesomeIcon icon={faTrashAlt} />
              </li>
              <li className="todolist__item todolist__item--done">
                <FontAwesomeIcon icon={faCheckSquare} />
                <span>Tâche à faire</span>
                <FontAwesomeIcon icon={faEdit} />
                <FontAwesomeIcon icon={faTrashAlt} />
              </li>
              <li className="todolist__item todolist__item--done">
                <FontAwesomeIcon icon={faCheckSquare} />
                <span>Tâche à faire</span>
                <FontAwesomeIcon icon={faEdit} />
                <FontAwesomeIcon icon={faTrashAlt} />
              </li>

              <li className="todolist__item todolist__item--done">
                <FontAwesomeIcon icon={faCheckSquare} />
                <span>Tâche à faire</span>
                <FontAwesomeIcon icon={faEdit} />
                <FontAwesomeIcon icon={faTrashAlt} />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="dashboard__right">
        <div className="user-details">
          <a href="#">
            <img src={profilePicture} alt="profile" className="user-details__picture" />
          </a>
          <div className="user-details__infos">
            <h2>Paul Ochon</h2>
            <ul className="user-details__tags">
              <li className="user-details__tag">23 ans</li>
              <li className="user-details__tag">180 cm</li>
              <li className="user-details__tag">75 kg</li>
              <li className="user-details__tag">IMC : 23,15</li>
              <li className="user-details__tag">Corpulence normale</li>
            </ul>
          </div>
        </div>

        <ul className="user-stats">
          <h3>Récapitulatif de mes données, ce jour</h3>
          <li className="user-stats__item">
            <label htmlFor="calories">
              <FontAwesomeIcon icon={faCarrot} />
            </label>
            <progress id="calories" max="2400" value="1800" />
            <span>1800 kcl / 2400 kcal</span>
          </li>

          <li className="user-stats__item">
            <label htmlFor="water">
              <FontAwesomeIcon icon={faTint} />
            </label>
            <progress id="water" max="150" value="15" />
            <span>0.15 l / 1.5 l</span>
          </li>

          <li className="user-stats__item">
            <label htmlFor="sleep">
              <FontAwesomeIcon icon={faBed} />
            </label>
            <progress id="sleep" max="8" value="8" />
            <span>8 h / 8 h</span>
          </li>

          <li className="user-stats__item">
            <label htmlFor="sport">
              <FontAwesomeIcon icon={faRunning} />
            </label>
            <progress id="sport" max="30" value="25" />
            <span>25 min / 30 min</span>
          </li>

          <li className="user-stats__item">
            <label htmlFor="weight">
              <FontAwesomeIcon icon={faWeight} />
            </label>
            <progress id="weight" max="20" value="5" className="surplus" />
            {/* initialement, il pesait 85 kg donc il avait 20 kg à perdre. il pèse mnt 80 donc il a 15 kg à perdre encore sur les 20 initiaux */}
            <span>80 kg / 65 kg</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

// == Export
export default Dashboard;
