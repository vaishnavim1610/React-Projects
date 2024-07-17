import "./App.css"; //inject css for app
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import React, { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete to delete todo", todo);
    //Deleting this way will not delete todos
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo=(title,desc)=>{
    console.log("I am ading this todo",title,desc)
    let sno=todos[todos.length-1].sno+1;
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo])   //created an array that will add myTodo to todos //syntax is using "..." (three dots)
    console.log(myTodo);
  }
  // setTodos is function that will update todos function
  const [todos, setTodos] = useState([
    { sno: 1, title: "Go to the market", desc: "you should go to market now." },
    { sno: 2, title: "Go to the mall", desc: "you should go to mall now." },
    { sno: 3, title: "Go to the home", desc: "you should go to home now." },
  ]);
  return (
    <>
      <Header title={"Todos List"} searchBar={true} />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
