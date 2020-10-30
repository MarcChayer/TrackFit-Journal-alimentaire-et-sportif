export const FETCH_DASHBOARD = 'FETCH_DASHBOARD';
export const FETCH_DASHBOARD_SUCCESS = 'FETCH_DASHBOARD_SUCCESS';

export const fetchDashboard = () => ({
  type: FETCH_DASHBOARD,
});

export const fetchDashboardSuccess = (payload) => ({
  type: FETCH_DASHBOARD_SUCCESS,
  payload,
});
