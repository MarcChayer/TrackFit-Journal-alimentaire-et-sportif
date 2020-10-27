/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';

// == Import style
import './statistics.scss';

// == Import composants
import Menu from 'src/components/Statistics/Menu';

// == Composant
const Statistics = () => (
  <div className="statistics">
    <Menu />
  </div>
);

// == Export
export default Statistics;
