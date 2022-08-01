import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Project from "./Components/Projects/Project";
import Service from "./Components/Services/Service";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
       <Home></Home>
       <About></About>
       <Service></Service>
       <Project></Project>
       <Contact></Contact>
       <Footer></Footer>
    </div>
  );
}

export default App;
