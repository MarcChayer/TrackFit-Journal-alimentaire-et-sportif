/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './burger.scss';

const ModalBurger = ({ onClick, isLogged }) => (

  <div className="modal-burger-content">
    <ul className="navigation-list-mobile">
      <li><NavLink exact to="/" className="navigation-link-mobile" activeClassName="navigation-link--active" onClick={onClick}>Accueil</NavLink></li>
      <li><NavLink to="/articles/alimentation" className="navigation-link-mobile" activeClassName="navigation-link--active" onClick={onClick}>Alimentation</NavLink></li>
      <li><NavLink to="/articles/sport" className="navigation-link-mobile" activeClassName="navigation-link--active" onClick={onClick}>Sport</NavLink></li>
      <li><NavLink to="/articles/bienetre" className="navigation-link-mobile" activeClassName="navigation-link--active" onClick={onClick}>Bien-être</NavLink></li>
      { isLogged
          && (<li><NavLink to="/tableaudebord" className="navigation-link-mobile" activeClassName="navigation-link--active" onClick={onClick}>Tableau de bord</NavLink></li>)}
    </ul>
    <button className="navigation--button--close" onClick={onClick}>
      <p>X</p>
    </button>
  </div>
);
export default ModalBurger;
