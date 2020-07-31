import React from "react";
import "./Pricing.css";
class RenderPricing extends React.Component {
  render() {
    return (
      <div className="card-pricing">
        <div
          key={this.props.id}
          style={{
            textAlign: "center",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <h3>{this.props.title}</h3>
          <br />
          {this.props.features}
          <br />
          <br />
          {this.props.price}
          <br />
          <br />
        </div>
        <a href="/#" className="button_pricing">
          Sign Up
        </a>

        <br />
      </div>
    );
  }
}

export default RenderPricing;
