// == Import npm
import React from 'react';

// == Import style
import './settings.scss';

// == Import composants
import Menu from './Menu';
import Params from './Params';

// == Composant
const Settings = () => (
  <div className="settings">
    <Menu />
    <div className="params">
      <Params />
    </div>
  </div>
);

// == Export
export default Settings;
