import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import RecentlyPlayed from "./pages/RecentlyPlayed";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/redirect" element={<Home />} />
        <Route exact path="/recently-played" element={<RecentlyPlayed />} />
      </Routes>
    </Router>
  );
}

export default App;
