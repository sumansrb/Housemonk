import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import RecipeReviewCard from "./components/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./components/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<RecipeReviewCard />} />
        <Route exact path="/user/:userId" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
