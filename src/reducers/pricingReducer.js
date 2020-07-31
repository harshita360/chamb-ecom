export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_PRICING":
      return action.payload;
    default:
      return state;
  }
};
