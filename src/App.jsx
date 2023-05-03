import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Shop } from "./pages/shop/Shop";
import { Cart } from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/ShopContextProvider";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
