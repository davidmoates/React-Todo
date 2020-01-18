// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Task from "./Todo";

const TodoList = props => {
  return (
    <div className="task-list">
      {props.tasks.map(task => (
        <Task
          key={task.id}
          tasks={task}
          toggleComplete={props.toggleComplete}
        />
      ))}
      <button className="clear-btn" onClick={props.clearTask}>
        Clear Task
      </button>
    </div>
  );
};

export default TodoList;
