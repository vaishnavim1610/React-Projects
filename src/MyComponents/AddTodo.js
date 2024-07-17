import React, { useState } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");    //useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault(); //it will not reload website
    if(!title || !desc){
      alert("Title Or Description cannot be blank")
    }
    else{props.addTodo(title,desc);}
  };
  return (
    <div className="container">
      <h3>Add Your Work</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}                     //given input is stored in title variable
            onChange={(e) => {                //arrow function is used to set the value to the title after changing
              setTitle(e.target.value);
            }}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-md btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
