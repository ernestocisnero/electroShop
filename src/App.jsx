import { Routes, Route } from "react-router-dom";
import './App.css';
import { Auth, Main } from "./pages";
import { Navbar } from "./UI/Navbar";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Main /> }/>
        <Route path="/auth" element={ <Auth /> }/>
      </Routes>
    </div>
  );
}

export default App;
