import { Routes, Route } from "react-router-dom";
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
import PrivateRoute from "./components/PrivateRoute";

function App() {

  return (
    <div className="App">
        <ScrollToTop>
          <WebsiteLayout>
            <Routes>
              <Route path="/newcity" element={<PrivateRoute role="admin"/>}>
                <Route path="/newcity" element={<NewCity />} />
              </Route>
              <Route path="/editcity" element={<PrivateRoute role="admin"/>}>
                <Route path="/editcity" element={<EditCity />} />
              </Route>
              <Route path="/mytineraries" element={<PrivateRoute/>}>
                <Route path="/mytineraries" element={<MyTineraries />} />
              </Route>
              <Route path="/newitinerary" element={<PrivateRoute/>}>
                <Route path="/newitinerary" element={<NewItinerary />} />
              </Route>
              <Route path="/" element={<Home />} />
              <Route path="/auth/signup" element={<SignUp />} />
              <Route path="/cities" element={<Cities />} />
              <Route path="/*" element={<UnderConstruction />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </WebsiteLayout>
        </ScrollToTop>
    </div>
  );
}

export default App;
