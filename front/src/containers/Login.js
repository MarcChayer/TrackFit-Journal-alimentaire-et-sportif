import { connect } from 'react-redux';
import { inputChange, loginInputSubmit } from '../actions/user';
import Login from '../components/Login';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  handleLoginUser: () => {
    console.log('je passe l\'action loginInputSubmit');
    dispatch(loginInputSubmit());
  },
  changeField: (value, name) => {
    const object = {
      [name]: value,
    };
    dispatch(inputChange(object));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
