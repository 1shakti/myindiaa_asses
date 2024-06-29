import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { CART_LIST_PATH, HOME_PATH } from "./constants/path";
import CartPage from "./pages/cartPage";

function App() {
  return (
   <Router>
    <Routes>
      <Route path={HOME_PATH} element={<Home />} />
      <Route path={CART_LIST_PATH} element={<CartPage />} />
    </Routes>
   </Router>
  );
}

export default App;
