export const FETCH_STATISTICS = 'FETCH_STATISTICS';
export const FETCH_STATISTICS_SUCCESS = 'FETCH_STATISTICS_SUCCESS';

export const fetchStatistics = () => ({
  type: FETCH_STATISTICS,
});

export const fetchStatisticsSuccess = (payload) => ({
  type: FETCH_STATISTICS_SUCCESS,
  payload,
});
