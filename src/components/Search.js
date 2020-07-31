import React from "react";
import backgd from "../bg_main.png";
import "./Search.css";
import { connect } from "react-redux";
import { fetchImages } from "../actions";
import Header from "./Header";
import Middle from "./Middle";
import SliderComponent from "./SliderComponent";
import Footer from "./Footer";

import { Link } from "react-router-dom";
class Search extends React.Component {
  componentDidMount() {
    this.props.fetchImages();
  }

  renderList() {
    if (this.props.images.landingSection) {
      return this.props.images.landingSection.map((image) => {
        return (
          <div className="card" key={image.id}>
            <div className="container">
              <h4 style={{ color: "white" }}>
                <b>{image.name}</b>
              </h4>
            </div>
            <Link to={`/chamb/details/${image.id}`}>
              {" "}
              <img
                src={image.preview_image}
                alt="Avatar"
                style={{ width: "100%" }}
              />
            </Link>
          </div>
        );
      });
    } else {
      return <div> not loaded</div>;
    }
  }

  render() {
    console.log(this.props.images.landingSection);
    return (
      <div>
        <Header />
        <div style={{ backgroundImage: `url(${backgd})`, height: "150vh" }}>
          <h1 style={{ textAlign: "center", fontSize: "50px" }}>
            Find your next product here
          </h1>
          <h3>It has never been easier</h3>
          <label className="title">Search Something You Want</label>

          <div className="dropdown">
            <button className="dropbtn"> Furniture</button>
            <div className="dropdown-content">
              <a href="/#">Furniture</a>
              <a href="/#">Appliances</a>
              <a href="/#">Stationary</a>
            </div>
          </div>
          <Link to="/" className="button-search">
            Search
          </Link>
          <br />
          <br />
          <br />
          <br />
          <br />
          {this.renderList()}
        </div>
        <br />
        <Middle />

        <br />
        <SliderComponent />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { images: state.images };
};
export default connect(mapStateToProps, { fetchImages: fetchImages })(Search);
