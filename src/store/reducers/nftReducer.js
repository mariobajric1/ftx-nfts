const nftReducer = (state = {}, action) => {
  switch (action.type) {
    case "connected":
      return action.payload;
    case "disconnected":
      return state + action.payload;
    default:
      return state;
  }
};

export default nftReducer;
