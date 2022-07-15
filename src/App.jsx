import { Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import './App.css';
import { Auth, Main } from "./pages";
import { Navbar } from "./UI/Navbar";


export const CartContext = createContext();

function App() {

  const [cartCount, setCartCount] = useState(0);

  return (
    <CartContext.Provider value={{cartCount, setCartCount}}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </CartContext.Provider>
  );
}

export default App;
