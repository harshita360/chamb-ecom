import { combineReducers } from "redux";
import imageReducer from "./imageReducer";
import sliderReducer from "./sliderReducer";
import pricingReducer from "./pricingReducer";
import detailsReducer from "./detailsReducer";

export default combineReducers({
  images: imageReducer,
  photos: sliderReducer,
  pricing: pricingReducer,
  productdetails: detailsReducer,
});
