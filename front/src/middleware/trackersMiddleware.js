/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  FETCH_SPORT_LIST,
  fetchSportListSuccess,
  SET_TRACKER_SPORT,
  setSportSuccess,
} from '../actions/trackers';

export default (store) => (next) => (action) => {
  const userId = store.getState().user.id;
  console.log('middlewareTrackers', userId);
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
    case SET_TRACKER_SPORT:
      console.log('SET_TRACKER_SPORT', action.payload);
      axios.post(`http://52.91.105.182/dashboard/${userId}/sport`, action.payload,
        // {
        //   sportIntensity: action.payload.sportIntensity,
        //   sportTime: action.payload.sportTime,
        //   sportType: action.payload.sportType,
        // },
        { withCredentials: true })
        .then((res) => {
          console.log('SET_TRACKER_SPORT', res.data);
          // A faire : envoyer les variables de la session utilisateur
          // Attention ! mettre à jour l'action creator
          store.dispatch(setSportSuccess(res.data));
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
