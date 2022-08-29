import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import WebsiteLayout from "./layouts/WebsiteLayout";
import Home from "./pages/Home";
// import Cities from "./components/Cities";
import UnderConstruction from "./pages/UnderConstruction";
import Cities from "./pages/Cities";
import NewCity from "./pages/NewCities";
import CityCard from "./components/CityCard";
import Forms from "./components/Input.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <WebsiteLayout>
        <Forms />
          <Routes>
            <Route path="/NewCity" element={<NewCity />} />
            <Route path="/" element={<Home />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/*" element={<UnderConstruction/>} />
          </Routes>
        </WebsiteLayout>
      </BrowserRouter>
    </div>
  );
}


export default App;
