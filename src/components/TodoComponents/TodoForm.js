import React from "react";

class ToDoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: ""
    };
  }

  handleChanges = e => {
    this.setState({ ...this.state, newTask: e.target.value });
  };

  handleSumbit = e => {
    e.preventDefault();
    this.props.addNewToDo(this.state.newTask);
  };

  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <input
          onChange={this.handleChanges}
          type="text"
          name="task"
          value={this.state.newTask}
        />
        <button>Add Task</button>
      </form>
    );
  }
}

export default ToDoForm;
