import axios from "axios";
export const fetchImages = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://5ed296ce717d5f0016518314.mockapi.io/api/v1/homepage-data"
    );

    dispatch({ type: "FETCH_IMAGES", payload: response.data[0] });
  };
};

export const fetchSliderImages = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://5ed296ce717d5f0016518314.mockapi.io/api/v1/homepage-data"
    );

    dispatch({ type: "FETCH_SLIDER_IMAGES", payload: response.data[0] });
  };
};

export const fetchPricing = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://5ed296ce717d5f0016518314.mockapi.io/api/v1/pricing-details"
    );

    dispatch({ type: "FETCH_PRICING", payload: response.data[0] });
  };
};

export const fetchDetails = (id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://5ed296ce717d5f0016518314.mockapi.io/api/v1/products/${id}`
    );
    dispatch({ type: "FETCH_DETAILS", payload: response.data });
  };
};
