// == Import npm
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
// == Import composants
import connectionRequired from 'src/assets/images/illustrations/illustration-connexion-requise.svg';
import FavoriteArticles from '../../containers/FavoriteArticles';
import Todolist from '../../containers/Todolist';
// == Import style
import './dashboard.scss';
import Menu from './Menu';
import Trackers from './Trackers';
import UserDetails from './UserDetails';

// == Composant
const Dashboard = ({
  fetchDashboard,
  allData,
  isLogged,
}) => {
  if (isLogged) {
    useEffect(() => {
      fetchDashboard();
    }, []);
  }
  if (!isLogged) {
    return (
      <div className="dashboard-connexion-required">
        <p className="dashboard-guests">Cet espace est réservé aux membres connectés.</p>
        <p className="dashboard-guests">Veuillez vous identifier ou créer un compte.</p>
        <img src={connectionRequired} alt="connexion requise" className="dashboard-guests-img" />
        <div className="buttons-connexion-required">
          <button className="signup-dashboard-button" type="submit"><NavLink to="/inscription">S'inscrire</NavLink></button>
          <button className="signin-dashboard-button" type="submit"><NavLink to="/connexion">Se connecter</NavLink></button>
        </div>
      </div>
    );
  }
  return (
    <div className="dashboard">
      <Helmet defaultTitle="Tableau de bord">
        <title>Tableau de bord</title>
        <meta
          name="description"
          content="Tableau de bord"
        />
      </Helmet>
      <Menu />
      <div className="dashboard__content">
        <div className="dashboard__left">
          <Trackers />
          <div className="favs-todo">
            <FavoriteArticles
              articleFav={allData}
            />
            <Todolist
              toDoList={allData}
            />
          </div>
        </div>
        {/* dashboard__right"> */}
        <UserDetails
          userData={allData}
        />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  allData: PropTypes.object.isRequired,
  fetchDashboard: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default Dashboard;
