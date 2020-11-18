import { connect } from 'react-redux';
import Stats from 'src/components/Statistics/Stats';

const mapStateToProps = (state) => ({
  userData: state.dashboard.allData,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
