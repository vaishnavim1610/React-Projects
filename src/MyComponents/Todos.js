import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  let todosStyle = {
    // border: "2px solid black",
    height: "82.8vh",
  };
  return (
    <div className="container" style={todosStyle}>
      <h3 className="my-3">Todos List</h3>
      <p>
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
