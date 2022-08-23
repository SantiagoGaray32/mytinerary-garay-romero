import "./App.css";
import WebsiteLayout from "./layout/WebsiteLayout";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <WebsiteLayout>
        <Home />
      </WebsiteLayout>
    </div>
  );
}

export default App;
