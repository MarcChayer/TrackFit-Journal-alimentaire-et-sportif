// == Import npm
import React from 'react';
import { Helmet } from 'react-helmet';
// == Import composants
import Params from 'src/containers/Params';
import Menu from './Menu';
// == Import style
import './settings.scss';

// == Composant
const Settings = () => (
  <div className="settings">
    <Helmet defaultTitle="Paramètre">
      <title>Paramètre</title>
      <meta
        name="description"
        content="Paramètre"
      />
    </Helmet>
    <Menu />
    <div className="params">
      <Params />
    </div>
  </div>
);

// == Export
export default Settings;
