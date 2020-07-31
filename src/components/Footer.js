import React from "react";
import "./Footer.css";
import footbg from "../footer_bg.png";
const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${footbg})` }}>
      <h2
        style={{ textAlign: "left", paddingTop: "40px", paddingLeft: "20px" }}
      >
        Start a free <br />
        account today
      </h2>

      <div className="search-container">
        <input type="text" placeholder="Search.." name="search" />
        <a href="/#" className="button_footer">
          Continue
        </a>
      </div>
      <hr />
      <br />

      <ul id="menu">
        <li>SELL ON CHAMB</li>
        <li>BUY ON CHAMB</li>
        <li>COMPANY</li>
        <li>INDUSTRIES</li>
      </ul>
    </div>
  );
};

export default Footer;
