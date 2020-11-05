import { connect } from 'react-redux';
import { getLastSleep } from 'src/reducers/dashboard';
import TrackerSleep from '../components/Dashboard/Trackers/TrackerSleep';

const mapStateToProps = (state) => ({
  sleep: getLastSleep(state.dashboard.allData.sleeps),
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TrackerSleep);
