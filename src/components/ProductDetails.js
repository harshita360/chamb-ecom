import React from "react";
import { connect } from "react-redux";
import { fetchDetails } from "../actions";
import "./ProductDetails.css";
import Header from "./Header";
import Footer from "./Footer";
class ProductDetails extends React.Component {
  componentDidMount() {
    this.props.fetchDetails(this.props.match.params.id);
    //  this.setState({ picurl: this.props.details.preview_image });
  }

  renderDetails = () => {
    if (this.props.details.photos) {
      return this.props.details.photos.map((photo) => {
        return (
          <div key={photo.id} className="carddetails">
            <img src={photo} alt="Avatar" style={{ width: "100%" }} />
          </div>
        );
      });
    } else {
      return <div> not loaded</div>;
    }
  };

  render() {
    console.log(this.props.details.preview_image);

    return (
      <div>
        <Header />
        <div className="detailscontainer">
          <h1 style={{ color: "black" }}>{this.props.details.product_name}</h1>
          <h4>By {this.props.details.posted_by}</h4>
          <img src={this.props.details.user_pic} alt="User" />
          <img
            src={this.props.details.preview_image}
            alt="preview"
            style={{ width: "40%", marginLeft: "50px" }}
          />

          <div className="rightdetails">
            {this.renderDetails()}
            <br />
            <br />
          </div>

          <div
            style={{
              backgroundColor: "white",
              float: "left",
              marginTop: "10px",
              marginLeft: "200px",
              marginRight: "200px",
            }}
          >
            <h3>Description</h3>
            <p
              style={{
                textAlign: "center",
              }}
            >
              {this.props.details.description}
            </p>
            <br />
            <h4> Price </h4>
            <h5>$ {this.props.details.price}</h5>
            <button className="buttondetails">Contact Company</button>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.productdetails);
  //  console.log(ownProps);
  return { details: state.productdetails };
};
export default connect(mapStateToProps, { fetchDetails: fetchDetails })(
  ProductDetails
);
