import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Map from "./pages/Map.jsx"; // Import the Map component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/map" element={<Map />} /> {/* Add the route for the Map component */}
      </Routes>
    </Router>
  );
}

export default App;
