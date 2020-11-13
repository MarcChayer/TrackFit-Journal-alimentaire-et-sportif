import { connect } from 'react-redux';
import Params from '../components/Settings/Params';

import { paramsInputSubmit, inputChange } from '../actions/user';

const mapStateToProps = (state) => {
  const { weights = [] } = state.dashboard.allData;
  //let weight = 0;
  //let imc = 0;  
  let weight = "--";
  let imc = "--";

  if (weights.length > 0) {
    weight = weights[weights.length - 1].weight;
  }
  if (state.dashboard.allData.height && weights.length > 0) {
    imc = Math.round(weight / ((state.dashboard.allData.height/100) * (state.dashboard.allData.height/100)));
  }
  return ({
    lastName: state.user.lastName,
    firstName: state.user.firstName,
    birthdate: state.user.birthdate,
    height: state.user.height,
    imc,
    estimatedSleepTime: state.user.estimatedSleepTime,
    weight: state.user.weight,
  });
};

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
