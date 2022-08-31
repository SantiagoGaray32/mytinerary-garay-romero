import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import WebsiteLayout from "./layouts/WebsiteLayout";
import Home from "./pages/Home";
import UnderConstruction from "./pages/UnderConstruction";
import Cities from "./pages/Cities";
import NewCity from "./pages/NewCities";
import CityCard from "./components/CityCard";
import Forms from "./components/Input.js";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <WebsiteLayout>
<<<<<<< HEAD
            <Routes>
              <Route path="/NewCity" element={<NewCity />} />
=======
            <Forms />
            <Routes>
              <Route path="/new-city" element={<NewCity />} />
>>>>>>> a765893614bc6627b5ebec980ab76390459b899e
              <Route path="/" element={<Home />} />
              <Route path="/cities" element={<Cities />} />
              <Route path="/*" element={<UnderConstruction />} />
            </Routes>
          </WebsiteLayout>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> a765893614bc6627b5ebec980ab76390459b899e
