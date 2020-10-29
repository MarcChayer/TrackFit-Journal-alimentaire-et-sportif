// == Import npm
import React from 'react';

// == Import
import './notfound.scss';
import notfoundDesktop from 'src/assets/images/icones/notfound-d.png';
import notfoundMobile from 'src/assets/images/icones/notfound-m.png';

// == Composant
const NotFound = () => (
  <div className="notfound">
    <img src={notfoundDesktop} alt="page non trouvée" className="desktop" />
    <img src={notfoundMobile} alt="page non trouvée" className="mobile" />
  </div>
);

// == Export
export default NotFound;
