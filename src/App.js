import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";

import Cart from "./components/Cart";
import Filters from "./components/Filters";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
