// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Item from "./ToDo";

const TodoList = props => {
  return (
    <div className="task-list">
      {props.toDo.map(task => (
        <Item key={task.id} task={task} toggleComplete={props.toggleComplete} />
      ))}
      <button className="clear-btn" onClick={props.clearTask}>
        Clear Task
      </button>
    </div>
  );
};

export default TodoList;
