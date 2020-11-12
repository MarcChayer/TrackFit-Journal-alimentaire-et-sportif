import { connect } from 'react-redux';
import { getLastSleep } from 'src/reducers/dashboard';
import TrackerSleep from '../components/Dashboard/Trackers/TrackerSleep';

const mapStateToProps = (state) => ({
  sleep: getLastSleep(state.dashboard.allData.sleeps),
  estimatedSleepTime: state.dashboard.allData.estimatedSleepTime,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TrackerSleep);

// import { connect } from 'react-redux';
// import { getLastSleep, userData } from 'src/reducers/dashboard';
// import TrackerSleep from '../components/Dashboard/Trackers/TrackerSleep';

// const mapStateToProps = (state) => {
//   let { sleep } = getLastSleep(state.dashboard.allData.sleeps);
//   if (!sleep) {
//     sleep = '--';
//   }
//   let { estimatedSleepTime } = userData(state.dashboard.allData.estimatedSleepTime);
//   if (!estimatedSleepTime) {
//     estimatedSleepTime = '--';
//   }
//   return {
//     sleep, estimatedSleepTime,
//   };
// };

// const mapDispatchToProps = () => ({});

// export default connect(mapStateToProps, mapDispatchToProps)(TrackerSleep);
