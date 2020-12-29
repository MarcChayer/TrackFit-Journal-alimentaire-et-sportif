import { connect } from 'react-redux';
import { inputChange } from '../actions/user';

import FieldParams from '../components/Settings/Params/FieldParams';

const mapStateToProps = (state, ownProps) => ({
  value: state[ownProps],
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const object = {
      [name]: value,
    };
    dispatch(inputChange(object));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FieldParams);
