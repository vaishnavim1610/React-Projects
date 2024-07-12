import logo from "./logo.svg";
import "./App.css"; //inject css for app
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";


function App() {
  return (
    <>
      <Header/>
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
