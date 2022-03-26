/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import {
  arrayOf, bool, func, string,
} from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionEdit, actionTaskSelected, actionUpdate } from '../../redux/actions/taskActions';
import generateId from '../../utils/generateId';
import EditInput from '../EditInput';

class List extends Component {
  selectTask = (task) => {
    const { dispatch } = this.props;
    dispatch(actionTaskSelected(task));
  };

  cancelEdit = () => {
    const { dispatch } = this.props;
    dispatch(actionEdit(false));
  };

  updateTask = (task) => {
    const { dispatch } = this.props;
    dispatch(actionUpdate(task));
    dispatch(actionEdit(false));
  };

  render() {
    const {
      tasks, taskSelected, edit,
    } = this.props;

    return (
      <ul>
        {tasks.map(({ id, task }) => {
          const selected = taskSelected === id;
          const editable = selected && edit;
          return (editable
            ? (
              <EditInput
                key={generateId()}
                cancelEdit={this.cancelEdit}
                taskText={{ task, id }}
                updateTask={this.updateTask}
              />
            )
            : (
              <li
                style={{
                  backgroundColor: selected && 'yellow',
                }}
                onClick={() => this.selectTask({ id, task })}
                key={id}
              >
                {task}
              </li>
            )
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  taskSelected: state.taskSelected,
  edit: state.edit,
  taskText: state.taskText,
});

export default connect(mapStateToProps)(List);

List.propTypes = {
  tasks: arrayOf(string),
  dispatch: func,
  edit: bool,
  taskText: string,
}.isRequired;
