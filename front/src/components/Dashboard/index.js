// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import composants
import Trackers from './Trackers';
import FavoriteArticles from './FavoriteArticles';
import Todolist from '../../containers/Todolist';
import UserDetails from './UserDetails';
import Menu from './Menu';

// == Import style
import './dashboard.scss';

// == Composant
const Dashboard = ({
  fetchDashboard,
  allData,
  isLogged,
}) => {
  useEffect(() => {
    fetchDashboard();
  }, []);

  if (!isLogged) {
    return (
      <div className="dashboard">
        <p>Vous devez vous connecter pour acceder à cette page</p>
      </div>
    );
  }
  return (
    <div className="dashboard">
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
  fetchDashboard: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default Dashboard;
