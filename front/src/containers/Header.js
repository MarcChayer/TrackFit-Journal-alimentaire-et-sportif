import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { logoutHandler } from '../actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  firstName: state.user.session.firstName,
});

const mapDispatchToProps = (dispatch) => ({
  logoutHandler: () => {
    dispatch(logoutHandler());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
