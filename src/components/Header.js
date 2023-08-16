import { useFetcher, useLocation } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
import AddToCart from "./AddToCart";
import CustomDropdown from "./AddToCart";
import "./Header.css";
import { useEffect, useState } from "react";

function Header() {
  const { search, dispatch, isShowModal, cart } = useProduct();
  const numOfAddedItem = cart.length;

  const x = useLocation();
  console.log(x.pathname.split("/"));

  return (
    <>
      <div className="header">
        <div className="logo">Shopping Cart</div>
        {/* {useLocation().pathname.split("/")[1] !== "cart" && ( */}
        <div className="search-bar">
          <input
            value={search}
            onChange={(e) =>
              dispatch({ type: "search-by-name", payload: e.target.value })
            }
            type="text"
            placeholder="Search"
          />
          {/* <i className="fas fa-search"></i> */}
          <span className="search-icon">&#128269;</span>
        </div>
        {/* // )} */}
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
