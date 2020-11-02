import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  justSubscribe: state.user.justSubscribe,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
