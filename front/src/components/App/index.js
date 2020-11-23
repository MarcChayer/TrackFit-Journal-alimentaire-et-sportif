// == Import npm
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  Redirect, Route,
  Switch,
  useLocation
} from 'react-router-dom';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import LegalNotice from 'src/components/LegalNotice';
import NotFound from 'src/components/NotFound';
import Settings from 'src/components/Settings';
import Statistics from 'src/components/Statistics';
import Articles from 'src/containers/Articles';
import CreateAccount from 'src/containers/CreateAccount';
import Dashboard from 'src/containers/Dashboard';
import Header from 'src/containers/Header';
import Login from 'src/containers/Login';

// == Composant
const App = ({
  isLogged,
  justSubscribe,
  checkAuth,
}) => {
  useEffect(() => {
    checkAuth();
  }, []);

  const location = useLocation();
  return (
    <div className="app">
      <Helmet defaultTitle="TrackFit">
        <title>TrackFit - Journal alimentaire et sportif</title>
        <meta
          name="description"
          content="TrackFit, votre journal alimentaire et sportif ! Simple et pratique, notez les aliments que vous consommez repas après repas, sans distraction.
          Notez également vos activités sportives, la durée, l’intensité, obtenez des statistiques sur la semaine, le mois et l’année !
          Compteur de calories, journal alimentaire, courbes de poids et bien plus...
          Application React ⚛."
        />
      </Helmet>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
        {!isLogged && justSubscribe && location.pathname === '/inscription'
        && (
        <Redirect to="/connexion" />
        )}
        {/* {!isLogged
        && ( */}
        <Route path="/inscription">
          <Header />
          <CreateAccount />
        </Route>
        {/* )} */}
        {/* {!isLogged
        && ( */}
        <Route path="/connexion">
          <Header />
          <Login />
        </Route>
        {/* )} */}
        <Route path="/articles/:slug">
          <Header />
          <Articles />
        </Route>
        <Route path="/tableaudebord">
          <Header />
          <Dashboard />
        </Route>
        <Route path="/statistiques">
          <Header />
          <Statistics />
        </Route>
        <Route path="/parametres">
          <Header />
          <Settings />
        </Route>
        <Route path="/mentionslegales">
          <Header />
          <LegalNotice />
        </Route>
        <Route path="*">
          <Header />
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};
App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  justSubscribe: PropTypes.bool.isRequired,
  checkAuth: PropTypes.func.isRequired,
};

// == Export
export default App;
