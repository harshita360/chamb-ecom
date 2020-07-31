export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_SLIDER_IMAGES":
      return action.payload;
    default:
      return state;
  }
};
