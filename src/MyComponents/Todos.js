import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center">Todos List</h3>
      <p className="text-center">
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
          </p>
    </div>
  );
};

export default Todos;
