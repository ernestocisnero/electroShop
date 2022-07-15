import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import './App.css';
import { Auth, Main,Cart } from "./pages";
import { Navbar } from "./UI/Navbar";


export const CartContext = createContext();

function App() {

  const initialCartCount = JSON.parse(localStorage.getItem("cartCount"));
  const [cartCount, setCartCount] = useState(initialCartCount || 0);

  return (
    <div className="App">
      <CartContext.Provider value={{ cartCount, setCartCount }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
    </div>

  );
}

export default App;
