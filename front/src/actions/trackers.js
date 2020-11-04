export const FETCH_SPORT_LIST = 'FETCH_SPORT_LIST';
export const FETCH_SPORT_LIST_SUCCESS = 'FETCH_SPORT_LIST_SUCCESS';

export const fetchSportList = () => ({
  type: FETCH_SPORT_LIST,
});

export const fetchSportListSuccess = (payload) => ({
  type: FETCH_SPORT_LIST_SUCCESS,
  payload,
});
