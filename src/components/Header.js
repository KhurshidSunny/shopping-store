import { useProduct } from "../context/ProductContext";
import AddToCart from "./AddToCart";
import CustomDropdown from "./AddToCart";
import "./Header.css";
import { useState } from "react";

function Header() {
  const [search, setSearch] = useState("");

  const { dispatch, isShowModal, cart } = useProduct();
  const numOfAddedItem = cart.length;

  return (
    <>
      <div className="header">
        <div className="logo">Shopping Cart</div>

        <div className="search-bar">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
          />
          {/* <i className="fas fa-search"></i> */}
          <span className="search-icon">&#128269;</span>
        </div>

        <div
          className="cart-dropdown"
          onClick={() => dispatch({ type: "show-add-to-cart-modal" })}
        >
          <span className="cart-icon">&#128722;</span>
          <div className="cart-items-count">{numOfAddedItem}</div>

          <div className="dropdown-icon"> {`${isShowModal ? "▲" : "▼"}`}</div>
        </div>
      </div>
    </>
  );
}

export default Header;
