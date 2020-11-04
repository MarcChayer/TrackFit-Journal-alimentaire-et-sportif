/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  FETCH_SPORT_LIST, fetchSportListSuccess,
} from '../actions/trackers';

export default (store) => (next) => (action) => {
  console.log('middlewareTrackers', action);
  switch (action.type) {
    case FETCH_SPORT_LIST:
      axios.get('http://52.91.105.182/sportTypeList', { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          // A faire : envoyer les variables de la session utilisateur
          // Attention ! mettre à jour l'action creator
          store.dispatch(fetchSportListSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
      break;
  }
};
