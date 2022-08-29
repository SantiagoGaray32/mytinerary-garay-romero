import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import WebsiteLayout from "./layout/WebsiteLayout";
import Home from "./components/Home";
// import Cities from "./components/Cities";
import UnderConstruction from "./pages/UnderConstruction";
import Cities from "./components/Cities";
import NewCity from "./components/NewCities";
import CityCard from "./components/CityCard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <WebsiteLayout> */}
          <Routes>
            <Route path="/NewCity" element={<NewCity />} />
            <Route path="/" element={<Home />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/*" element={<UnderConstruction/>} />
          </Routes>
        {/* </WebsiteLayout> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
