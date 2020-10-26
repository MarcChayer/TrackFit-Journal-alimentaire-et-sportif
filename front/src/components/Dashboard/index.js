// == Import npm
import React from 'react';

// == Import style
import './dashboard.scss';

// == Import composants
import Menu from 'src/components/Dashboard/Menu';
import Trackers from 'src/components/Dashboard/Trackers';
import FavoriteArticles from 'src/components/Dashboard/FavoriteArticles';
import Todolist from 'src/components/Dashboard/Todolist';
import UserDetails from 'src/components/Dashboard/UserDetails';

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
