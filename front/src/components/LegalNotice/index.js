/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';

import developerMan from 'src/assets/images/illustrations/man.svg';
import developerWoman from 'src/assets/images/illustrations/woman.svg';
import logo from 'src/assets/images/logo.svg';

// == Import styles
import './legalnotice.scss';

// == Composant
const LegalNotice = () => (
  <div className="legalnotice">
    <h1>Mentions légales</h1>
    <h2>Projet "Trackfit" réalisé par des étudiants de l'école de formation <a href="https://oclock.io" target="_blank" rel="noreferrer"> O'Clock </a></h2>

    <div className="legalnotice-content">
      <div className="legalnotice-team">

        <div className="team-card">
          <img src={developerMan} alt="membre de l'équipe" className="team-img" />
          <h2 className="team-name">
            Alexis Ouzidane
          </h2>
          <p className="team-contact">alexis.ouzidane@gmail.com</p>
          <h3 className="team-title">
            Front
          </h3>
        </div>

        <div className="team-card">
          <img src={developerMan} alt="membre de l'équipe" className="team-img" />
          <h2 className="team-name">
            Marc Chayer
          </h2>
          <p className="team-contact">marcci.@mac.com</p>
          <h3 className="team-title">
            Lead Back, Lead Front
          </h3>
        </div>

        <div className="team-card">
          <img src={developerMan} alt="membre de l'équipe" className="team-img" />
          <h2 className="team-name">
            Matthieu Depret
          </h2>
          <p className="team-contact">matthieu.depret.md@gmail.com</p>
          <h3 className="team-title">
            Git Master, Scrum Master
          </h3>
        </div>

        <div className="team-card">
          <img src={developerWoman} alt="membre de l'équipe" className="team-img" />
          <h2 className="team-name">
            Pauline Berton
          </h2>
          <p className="team-contact">pauline.berton03@gmail.com</p>
          <h3 className="team-title">
            Product Owner, Front
          </h3>
        </div>
      </div>
      <div className="legalnotice-infos">
        <img src={logo} alt="logo" className="legalnotice-logo" />
        <h2 className="legalnotice-infos-title">Design global du site :</h2>
        <p className="legalnotice-infos-desc">Réalisé par Marc Chayer</p>
        <h2 className="legalnotice-infos-title">Utilisation des icones :</h2>
        <p className="legalnotice-infos-desc">flaticon.com</p>
        <h2 className="legalnotice-infos-title">Utilisation d'ilustrations :</h2>
        <p className="legalnotice-infos-desc">https://undraw.co/illustrations</p>
      </div>
    </div>
  </div>
);

// == Export
export default LegalNotice;
