import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../logomain.png";
const Header = () => {
  return (
    <div>
      <ul style={{ height: "10vh" }}>
        <li>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="/chamb/howitworks">How It Works</Link>
        </li>
        <li>
          <Link to="/chamb/pricing">Pricing</Link>
        </li>
        <li style={{ float: "right" }}>
          <a href="/#" className="button-header">
            Sign Up
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
