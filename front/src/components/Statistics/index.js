/* eslint-disable max-len */
// == Import npm
import React from 'react';
// import React, { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';

// import PropTypes from 'prop-types';

// == Import images
// import connectionRequired from 'src/assets/images/illustrations/illustration-connexion-requise.svg';

// == Import style
import './statistics.scss';

// == Import composants
import Menu from './Menu';
import Stats from '../../containers/Stats';

// == Composant
const Statistics = ({
  // fetchStatistics,
  allData,
  // isLogged,
}) => (
  // if (isLogged) {
  //   useEffect(() => {
  //     fetchStatistics();
  //   }, []);
  // }
  // if (!isLogged) {
  //   return (
  //     <div className="dashboard-connexion-required">
  //       <p className="dashboard-guests">Cet espace est réservé aux membres connectés.</p>
  //       <p className="dashboard-guests">Veuillez vous identifier ou créer un compte.</p>
  //       <img src={connectionRequired} alt="connexion requise" className="dashboard-guests-img" />
  //       <div className="buttons-connexion-required">
  //         <button className="signup-dashboard-button" type="submit"><NavLink to="/inscription">S'inscrire</NavLink></button>
  //         <button className="signin-dashboard-button" type="submit"><NavLink to="/connexion">Se connecter</NavLink></button>
  //       </div>
  //     </div>
  //   );
  // }
  // return (
  <div className="stats">
    <Menu />
    <div className="statistics">
      <Stats
        userData={allData}
      />
    </div>
  </div>
);
// };

// Statistics.propTypes = {
//   fetchStatistics: PropTypes.func.isRequired,
//   isLogged: PropTypes.bool.isRequired,
// };

// == Export
export default Statistics;
