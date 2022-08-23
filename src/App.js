import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import WebsiteLayout from "./layout/WebsiteLayout";
import Home from "./components/Home";
import Cities from "./components/Cities";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <WebsiteLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cities" element={<Cities />} />
          </Routes>
        </WebsiteLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
