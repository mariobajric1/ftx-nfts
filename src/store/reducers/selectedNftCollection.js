const selectedNftCollectionReducer = (state = {}, action) => {
  switch (action.type) {
    case "selectedCollection":
      return action.payload;
    case "unselect":
      return state;
    default:
      return state;
  }
};

export default selectedNftCollectionReducer;
