import { connect } from 'react-redux';
import TrackerSleep from '../components/Dashboard/Trackers/TrackerSleep';
import { getLastSleep } from '../reducers/dashboard';

const mapStateToProps = (state) => ({
  sleep: getLastSleep(state.dashboard.allData.sleeps),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TrackerSleep);
