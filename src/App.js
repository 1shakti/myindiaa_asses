import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Cartlist from "./pages/cartlist";
import { CART_LIST_PATH, HOME_PATH } from "./constants/path";

function App() {
  return (
   <Router>
    <Routes>
      <Route path={HOME_PATH} element={<Home />} />
      <Route path={CART_LIST_PATH} element={<Cartlist />} />
    </Routes>
   </Router>
  );
}

export default App;
