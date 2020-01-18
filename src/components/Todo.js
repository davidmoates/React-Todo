import React from "react";

const Task = props => {
  return (
    <div
      onClick={event => props.toggleComplete(props.task.id)}
      className={`task${props.tasks.completed ? " completed" : ""}`}
    >
      <p>{props.tasks.task}</p>
    </div>
  );
};

export default Task;
