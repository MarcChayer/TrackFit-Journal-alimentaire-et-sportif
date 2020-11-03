import { connect } from 'react-redux';
import ModalSleep from 'src/components/Dashboard/Trackers/ModalSleep';
// import { trackerInputSubmit } from '../actions/trackers';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  handleTracker: () => {
    console.log('je passe dans l\'handleTracker');
    // dispatch(trackerInputSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalSleep);
