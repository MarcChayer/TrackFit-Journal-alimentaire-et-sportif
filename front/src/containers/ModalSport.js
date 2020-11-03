import { connect } from 'react-redux';
import ModalSport from 'src/components/Dashboard/Trackers/ModalSport';
import { fetchSportList } from '../actions/trackers';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchSportList: () => {
    console.log('container fetchSport');
    dispatch(fetchSportList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalSport);
