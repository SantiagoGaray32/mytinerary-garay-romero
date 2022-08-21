import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer/Footer.js";
import Hero from "./components/Hero.js";
import Calltoaction from "./components/Calltoaction.js";

function App() {
  return (
    <div className="App">
      <Hero />
      <Calltoaction />
      <Footer />
    </div>
  );
}

export default App;
