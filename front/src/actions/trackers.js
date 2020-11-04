export const FETCH_SPORT_LIST = 'FETCH_SPORT_LIST';
export const FETCH_SPORT_LIST_SUCCESS = 'FETCH_SPORT_LIST_SUCCESS';
export const SET_TRACKER_SPORT = 'SET_TRACKER_SPORT';
export const SET_SPORT_SUCCESS = 'SET_SPORT_SUCCESS';

export const fetchSportList = () => ({
  type: FETCH_SPORT_LIST,
});

export const fetchSportListSuccess = (payload) => ({
  type: FETCH_SPORT_LIST_SUCCESS,
  payload,
});

export const setTrackerSport = (payload) => ({
  type: SET_TRACKER_SPORT,
  payload,
});

export const setSportSuccess = (payload) => ({
  type: SET_SPORT_SUCCESS,
  payload,
});
