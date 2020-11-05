import { connect } from 'react-redux';
import Params from 'src/components/Settings/Params';

import { paramsInputSubmit, inputChange } from '../actions/user';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  handleParams: () => {
    console.log('je passe l\'action loginInputSubmit');
    dispatch(paramsInputSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Params);
