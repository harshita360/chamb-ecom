import React from "react";
import left from "../left.jpg";
import right from "../right.jpg";
import "./Middle.css";
const Middle = () => {
  return (
    <div className="holder">
      <div className="left">
        <img src={left} className="leftimg" alt="user" />
        <br />
        <br />
        <h3 style={{ color: "black" }}>
          Explore exciting and exotic products tailored to you.{" "}
        </h3>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris..{" "}
        </p>
      </div>
      <div className="right"></div>
      <img src={right} className="rightimg" alt="user2" />
      <br />
      <br />
      <h3 style={{ color: "black" }}>
        List your products on chamb and grow connections.
      </h3>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris..
      </p>
    </div>
  );
};
export default Middle;
