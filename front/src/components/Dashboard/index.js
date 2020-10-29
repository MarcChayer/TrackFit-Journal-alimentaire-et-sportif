// == Import npm
import React from 'react';

// == Import style
import './dashboard.scss';

// == Import composants
import Trackers from './Trackers';
import FavoriteArticles from './FavoriteArticles';
import Todolist from './Todolist';
import UserDetails from './UserDetails';
import Menu from './Menu';

// == Composant
const Dashboard = () => (
  <div className="dashboard">
    <Menu />

    <div className="dashboard__content">

      <div className="dashboard__left">
        <Trackers />
        <div className="favs-todo">
          <FavoriteArticles />
          <Todolist />
        </div>
      </div>

      {/* dashboard__right"> */}
      <UserDetails />

    </div>
  </div>
);

// == Export
export default Dashboard;
