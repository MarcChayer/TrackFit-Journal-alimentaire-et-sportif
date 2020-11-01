import { connect } from 'react-redux';
import { fetchDashboard } from '../actions/dashboard';
import Dashboard from '../components/Dashboard';

const mapStateToProps = (state) => ({
  allData: state.dashboard.allData,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDashboard: () => {
    console.log('je passe dans le container fetchDashboard');
    dispatch(fetchDashboard());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
