import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { connect } from "react-redux";
import { fetchPricing } from "../actions";
import "./Pricing.css";
import RenderPricing from "./RenderPricing";

class Pricing extends React.Component {
  componentDidMount() {
    this.props.fetchPricing();
  }

  renderList() {
    if (this.props.pricing.monthly) {
      return this.props.pricing.monthly.map((prices) => {
        return (
          <div>
            <RenderPricing
              id={prices.free.price}
              features={prices.free.features}
              price={prices.free.price}
              title=<div>Chamb Free</div>
            />

            <RenderPricing
              id={prices.custom.price}
              features={prices.custom.features}
              price={prices.custom.price}
              title=<div>Chamb Solution</div>
            />

            <RenderPricing
              id={prices.pro.price}
              features={prices.pro.features}
              price={prices.pro.price}
              title=<div>Chamb Pro</div>
            />

            <RenderPricing
              id={prices.growth.price}
              features={prices.growth.features}
              price={prices.growth.price}
              title=<div>Chamb Growth</div>
            />
          </div>
        );
      });
    } else {
      return <div>not loaded</div>;
    }
  }

  render() {
    return (
      <div>
        <Header />

        <div className="pricingbody">
          <h1 style={{ textAlign: "center", fontSize: "40px" }}>
            {" "}
            Pricing On Chamb
          </h1>
          <h3 className="sidehead">
            Get targeted distribution to Chamb's built-in network of global
            companies.
          </h3>
          <h3 className="sidehead">Choose the right one for you.</h3>
          <br />
          <br />

          {this.renderList()}
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { pricing: state.pricing };
};
export default connect(mapStateToProps, { fetchPricing: fetchPricing })(
  Pricing
);
