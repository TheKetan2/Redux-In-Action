import React, { Component } from "react";
import { connect } from "react-redux";
import TaskPage from "./TaskPage";

// const mockTasks = [
//   {
//     id: 1,
//     title: "Learn Redux",
//     description: "The store, actions, and reducers, oh my!",
//     status: "In Progress"
//   },
//   {
//     id: 2,
//     title: "Peace on Earth",
//     description: "No big deal.",
//     status: "Unstraced"
//   }
// ];

class App extends Component {
  onCreateTask = ({ title, description }) => {
    this.props.dispatch({
      type: "CREATE_TASK",
      payload: {
        title,
        description
      }
    });
  };

  render() {
    return (
      <div className="main-content">
        <TaskPage tasks={this.props.tasks} onCreateTask={this.onCreateTask} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

export default connect(mapStateToProps)(App);
