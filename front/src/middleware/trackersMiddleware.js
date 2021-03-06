/* eslint-disable no-case-declarations */
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  fetchFoodListSuccess,
  fetchSportListSuccess,
  FETCH_FOOD_LIST,
  FETCH_SPORT_LIST,
  setFoodSuccess,
  setSportSuccess,
  SET_TRACKER_FOOD,
  SET_TRACKER_SPORT,
} from '../actions/trackers';

export default (store) => (next) => (action) => {
  const userId = store.getState().user.id;
  toast.configure();
  switch (action.type) {
    case FETCH_SPORT_LIST:
      axios.get('http://3.90.247.93:8080/api/sportTypeList', { withCredentials: true })
        .then((res) => {
          // console.log(res.data);
          // A faire : envoyer les variables de la session utilisateur
          // Attention ! mettre à jour l'action creator
          store.dispatch(fetchSportListSuccess(res.data));
        })
        .catch((error) => {
          // console.log(error);
          toast.error('Une erreur est survenue.', { className:"toast__error", position: toast.POSITION.TOP_RIGHT });
        });
      break;
    case SET_TRACKER_SPORT:
      // console.log('SET_TRACKER_SPORT', action.payload);
      axios.post(`http://3.90.247.93:8080/api/dashboard/${userId}/sport`, action.payload,
        { withCredentials: true })
        .then((res) => {
          // console.log('SET_TRACKER_SPORT', res.data);
          // A faire : envoyer les variables de la session utilisateur
          // Attention ! mettre à jour l'action creator
          store.dispatch(setSportSuccess(res.data));
        })
        .catch((error) => {
          // console.log(error);
          toast.error('Vous devez renseigner tous les champs.', { className:"toast__error", position: toast.POSITION.TOP_RIGHT });
        });
      break;
    case SET_TRACKER_FOOD:
      // console.log('SET_TRACKER_FOOD', action.payload);
      axios.post(`http://3.90.247.93:8080/api/dashboard/${userId}/food`, action.payload,
        { withCredentials: true })
        .then((res) => {
          // console.log('SET_TRACKER_FOOD', res.data);
          // A faire : envoyer les variables de la session utilisateur
          // Attention ! mettre à jour l'action creator
          store.dispatch(setFoodSuccess(res.data));
        })
        .catch((error) => {
          // console.log(error);
          toast.error('Vous devez renseigner tous les champs.', { className:"toast__error", position: toast.POSITION.TOP_RIGHT });
        });
      break;
    case FETCH_FOOD_LIST:
      // 52.91.105.182
      axios.get('http://3.90.247.93:8080/api/foodTypeList', { withCredentials: true })
        .then((res) => {
          // console.log('FETCH_FOOD_LIST', res.data);
          // A faire : envoyer les variables de la session utilisateur
          // Attention ! mettre à jour l'action creator
          store.dispatch(fetchFoodListSuccess(res.data));
        })
        .catch((error) => {
          // console.log(error);
          toast.error('Une erreur est survenue.', { className:"toast__error", position: toast.POSITION.TOP_RIGHT });
        });
      break;
    default:
      next(action);
      break;
  }
};
