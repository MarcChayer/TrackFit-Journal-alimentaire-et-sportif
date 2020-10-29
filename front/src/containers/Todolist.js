import { connect } from 'react-redux';
import { registerTaskSubmit } from '../actions/todolist';

import Todolist from '../components/Dashboard/Todolist';

const mapStateToProps = (state) => ({
  addTask: state.dashboard.addTask,
});

const mapDispatchToProps = (dispatch) => ({
  submitAddTask: () => {
    dispatch(registerTaskSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
