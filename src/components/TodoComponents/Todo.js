import React from "react";

const Task = props => {
  return (
    <div
      onClick={event => props.toggleComplete(props.task.id)}
      className={`item${props.item.completed ? " completed" : ""}`}
    >
      <p>{props.task.task}</p>
    </div>
  );
};

export default Task;
