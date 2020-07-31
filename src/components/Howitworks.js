import React from "react";
import "./Howitworks.css";
import workicon from "../works-icon-01.png";
import stepone from "../works-icon-02.png";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
const Howitworks = () => {
  return (
    <div className="workcontainer">
      <Header />
      <div className="leftworks">
        <h1 style={{ color: "black" }}>How it works if you’re a buyer.</h1>
        <br />
        <h3 style={{ color: "black", textAlign: "left" }}>
          We explained the buying proces of Chamb in three simple steps. See how
          it works, benefits and FAQ.
        </h3>
        <h4>Sign Up For Free</h4>
        <br />
        <div class="search-container">
          <input type="text" placeholder="Search.." name="search" />
          <Link to="/" className="button_works">
            Continue
          </Link>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />

      <div>
        <img src={workicon} className="firstimg" alt="profile" />
        <br />
        <div className="big">01</div>
        <div
          style={{ fontSize: "30px", fontWeight: "500", textAlign: "center" }}
        >
          Small or Big
          <br /> we have the solution.
          <div
            style={{
              textAlign: "left",
              paddingLeft: "600px",
              paddingRight: "100px",
              fontSize: "20px",
            }}
          >
            <br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. laudantium rem aperiam, eaque ipsa quae ab illo inventore
            veritatis
          </div>
        </div>

        <img src={stepone} className="stepone" alt="profile" />

        <div className="bigblue">02</div>

        <div
          style={{
            textAlign: "left",
            paddingLeft: "600px",
            paddingRight: "100px",
            fontSize: "20px",
          }}
        >
          We revolutionized <br />
          Searching
          <br />
          <br />
          laudantium rem aperiam, eaque ipsa quae ab illo inventore veritatis
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Howitworks;
