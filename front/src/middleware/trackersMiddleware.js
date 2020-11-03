/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  FETCH_SPORT_LIST,
} from '../actions/trackers';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SPORT_LIST:
      axios.post('http://52.91.105.182/signup', {})
        .then((res) => {
          console.log(res.data);
          // A faire : envoyer les variables de la session utilisateur
          // Attention ! mettre à jour l'action creator
          // store.dispatch(userIsSubscribed(res.data.userSave));
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
