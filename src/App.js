import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import WebsiteLayout from "./layouts/WebsiteLayout";
import Home from "./pages/Home";
import UnderConstruction from "./pages/UnderConstruction";
import Cities from "./pages/Cities";
import NewCity from "./pages/NewCities";
import ScrollToTop from "./components/ScrollToTop";
import Details from "./pages/DetailsPage";
import EditCity from "./pages/EditCity";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <WebsiteLayout>
            <Routes>
              <Route path="/NewCity" element={<NewCity />} />
              <Route path="/" element={<Home />} />
              <Route path="/cities" element={<Cities />} />
              <Route path="/*" element={<UnderConstruction />} />
              <Route path="/details" element={<Details />} />
              <Route path="/editCity" element={<EditCity />} />
            </Routes>
          </WebsiteLayout>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
