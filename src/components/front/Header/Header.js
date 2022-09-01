import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Register from "../../Register";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="Logo">
            Sneakers Shop
          </Link>
        </h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/Products">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/Register">Register</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cart" className="cart">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
