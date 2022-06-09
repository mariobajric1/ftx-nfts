const selectedNftReducer = (state = {}, action) => {
  switch (action.type) {
    case "selectednft":
      return action.payload;
    case "unselect":
      return state;
    default:
      return state;
  }
};

export default selectedNftReducer;
