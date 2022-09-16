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
import MyTineraries from "./pages/MyTineraries";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NewItinerary from "./pages/NewItinerary";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <WebsiteLayout>
            <Routes>
              <Route path="/newcity" element={<NewCity />} />
              <Route path="/" element={<Home />} />
              <Route path="/auth/signup" element={<SignUp />} />
              <Route path="/cities" element={<Cities />} />
              <Route path="/*" element={<UnderConstruction />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/editcity" element={<EditCity />} />
              <Route path="/mytineraries" element={<MyTineraries />} />
              <Route path="/newitinerary" element={<NewItinerary />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </WebsiteLayout>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
