import { Dropdown, Navbar } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">Shopping Cart</div>

      <div className="search-bar">
        <input type="text" placeholder="Search" />
        {/* <i className="fas fa-search"></i> */}
        <span className="search-icon">&#128269;</span>
      </div>

      <div className="cart-dropdown">
        <span className="cart-icon">&#128722;</span>
        <div className="cart-items-count">0</div>
        <select className="dropdown">
          <option></option>
          <option></option>
          <option></option>
        </select>
        {/* Add your dropdown content here */}
      </div>
    </div>
  );
}

export default Header;
