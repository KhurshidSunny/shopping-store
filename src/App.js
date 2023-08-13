import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";

import Cart from "./components/Cart";
import Filters from "./components/Filters";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Header />
      <Filters />
      <Cart /> */}
      <Home />
    </div>
  );
}

export default App;
