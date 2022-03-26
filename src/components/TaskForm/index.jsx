import { func } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  actionCleanAll, actionEdit, actionInsert, actionTaskRemove,
} from '../../redux/actions/taskActions';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
  }

  inserirTarefa = () => {
    const { task } = this.state;
    const { funcPropInserirTarefa } = this.props;
    funcPropInserirTarefa(task);
    this.setState({ task: '' });
  };

  render() {
    const { task } = this.state;
    const { removeTask, cleanAll, editTask } = this.props;
    return (
      <div>
        <label htmlFor="input-task">
          task:
          <input
            value={task}
            type="text"
            id="input-task"
            onChange={({ target }) => this.setState({ task: target.value })}
          />
        </label>
        <button type="button" onClick={this.inserirTarefa}>Insert</button>
        <button type="button" onClick={removeTask}>Delete</button>
        <button type="button" onClick={editTask}>Edit</button>
        <button type="button" onClick={cleanAll}>Clean All</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  funcPropInserirTarefa: (task) => {
    dispatch(actionInsert(task));
  },
  removeTask: () => dispatch(actionTaskRemove),
  cleanAll: () => dispatch(actionCleanAll),
  editTask: () => dispatch(actionEdit(true)),
});

export default connect(null, mapDispatchToProps)(TaskForm);

TaskForm.propTypes = {
  funcPropInserirTarefa: func,
  removeTask: func,
  cleanAll: func,
  editTask: func,
}.isRequired;
