import { connect } from 'react-redux';
import { fetchStatistics } from '../actions/statistics';
import Statistics from '../components/Statistics';

const mapStateToProps = (state) => {
  const data = state.statistics.allData;
  return ({
    allData: data,
    isLogged: state.user.isLogged,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchStatistics: () => {
    // console.log('je passe dans le container fetchStatistics');
    dispatch(fetchStatistics());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
