import React, { Component } from 'react';
import List from '../../components/List';
import TaskForm from '../../components/TaskForm';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Todo List</h1>
        <TaskForm />
        <List />
      </div>
    );
  }
}

export default Home;
