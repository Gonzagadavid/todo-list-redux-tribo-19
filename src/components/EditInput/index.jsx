import { func } from 'prop-types';
import React, { Component } from 'react';

class EditInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskEdit: props.taskText.task,
    };
  }

  render() {
    const { cancelEdit, taskText, updateTask } = this.props;
    const { taskEdit } = this.state;

    return (
      <>
        <input
          type="text"
          value={taskEdit}
          onChange={({ target }) => this.setState({ taskEdit: target.value })}
        />
        <button type="button" onClick={() => updateTask({ task: taskEdit, id: taskText.id })}>Update</button>
        <button type="button" onClick={cancelEdit}>
          Cancel
        </button>
      </>
    );
  }
}

export default EditInput;

EditInput.propTypes = {
  cancelEdit: func,
}.isRequired;
