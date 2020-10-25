import { connect } from 'react-redux';
import { registerInputChange } from '../actions/user';

import Field from '../components/CreateAccount/Field';

const mapStateToProps = (state, ownProps) => ({
  value: state[ownProps],
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value, name) => {
    const object = {
      [name]: value,
    };
    dispatch(registerInputChange(object));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
