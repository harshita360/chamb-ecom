import React from "react";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";
import { fetchSliderImages } from "../actions";
import Slider from "react-slick";
class SliderComponent extends React.Component {
  componentDidMount() {
    this.props.fetchSliderImages();
  }

  renderSlider() {
    if (this.props.photos.carouselCards) {
      return this.props.photos.carouselCards.map((photo) => {
        return (
          <div className="bodysection" key={photo.id}>
            <div className="cardslide">
              <div className="containerslide">
                <h4 style={{ color: "white" }}>
                  <b>{photo.name}</b>
                </h4>
              </div>

              <img
                src={photo.preview_image}
                alt="Avatar"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        );
      });
    } else {
      return <div> not loaded</div>;
    }
  }

  render() {
    //console.log(this.props.images.landingSection);
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };

    return (
      <div style={{ height: "40vh" }}>
        <br />
        <div>
          <Slider {...settings}>{this.renderSlider()}</Slider>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { photos: state.photos };
};
export default connect(mapStateToProps, {
  fetchSliderImages: fetchSliderImages,
})(SliderComponent);
