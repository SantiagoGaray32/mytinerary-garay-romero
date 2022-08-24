import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer/Footer.js";
import Hero from "./components/Hero.js";
import Calltoaction from "./components/Calltoaction.js";
import Carrousel from "./components/Carousel.js";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero /> 
      <Calltoaction />
      <Carrousel />
      <Footer />
    </div>
  );
}

export default App;
