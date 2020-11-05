import { connect } from 'react-redux';
import Params from '../components/Settings/Params';

import { paramsInputSubmit, inputChange } from '../actions/user';

const mapStateToProps = (state) => ({
  lastName: state.user.lastName,
  firstName: state.user.firstName,
  email: state.user.email,
  password: state.user.password,
  confirmedPassword: state.user.confirmedPassword,
  birthdate: state.user.birthdate,
  height: state.user.height,
  estimatedSleepTime: state.user.estimatedSleepTime,
  weight: state.user.weight,
  weightGoal: state.user.weightGoal,
});

const mapDispatchToProps = (dispatch) => ({
  handleParams: () => {
    console.log('je passe l\'action paramsInputSubmit');
    dispatch(paramsInputSubmit());
  },
  changeField: (value, name) => {
    const object = {
      [name]: value,
    };
    dispatch(inputChange(object));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Params);
