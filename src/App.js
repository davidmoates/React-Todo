import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import './components/Todo.css';

const toDo = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      toDoList: toDo
    };
  }

  addNewToDo = newToDo => {
    const newState = {
      ...this.state,
      toDoList: [
        ...this.state.toDoList,
        { task: newToDo, completed: false, id: Date.now() }
      ]
    };
    this.setState(newState);
  };

  toggleComplete = id => {
    const newState = {
      ...this.state,
      toDoList: this.state.toDoList.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    };
    this.setState(newState);
  };

  clearTask = () => {
    const newState = {
      ...this.state,
      toDoList: this.state.toDoList.filter(task => {
        return !task.completed;
      })
    };
    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>ToDo List</h1>
          <TodoForm addNewToDo={this.addNewToDo} />
        </div>
        <TodoList
          tasks={this.state.toDoList}
          toggleComplete={this.toggleComplete}
          clearTask={this.clearTask}
        />
      </div>
    );
  }
}

export default App;
