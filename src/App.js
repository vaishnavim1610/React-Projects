import logo from "./logo.svg";
import "./App.css"; //inject css for app
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";

function App() {
  let todos = [
    { sno: 1, title: "Go to the market", desc: "you should go to market now." },
  ];
  return (
    <>
      <Header title={"Todos List"} searchBar={true} />
      <Todos />
      <Footer />
    </>
  );
}

export default App;
