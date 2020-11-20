// == Import npm
import React from 'react';
import { Helmet } from 'react-helmet';
import notfoundDesktop from 'src/assets/images/illustrations/illustration-notfound-d.svg';
import notfoundMobile from 'src/assets/images/illustrations/illustration-notfound-m.svg';
// == Import
import './notfound.scss';

// == Composant
const NotFound = () => (
  <div className="notfound">
    <Helmet defaultTitle="404 page non trouvée">
      <title>404 page non trouvée</title>
      <meta
        name="description"
        content="404 page non trouvée"
      />
    </Helmet>
    <img src={notfoundDesktop} alt="page non trouvée" className="desktop" />
    <img src={notfoundMobile} alt="page non trouvée" className="mobile" />
  </div>
);

// == Export
export default NotFound;
