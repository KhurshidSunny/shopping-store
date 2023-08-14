import "./Home.css";
import Header from "./Header";
import Filters from "./Filters";
import Cart from "./Cart";
import CustomDropdown from "./AddToCart";
import AddToCart from "./AddToCart";
import { useState } from "react";
import { useProduct } from "../context/ProductContext";

function Home() {
  const { isShowModal } = useProduct();

  return (
    <div className="main-layout">
      <Header />

      <div className="content">
        {isShowModal ? (
          <AddToCart />
        ) : (
          <>
            <Filters />
            <Cart />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
