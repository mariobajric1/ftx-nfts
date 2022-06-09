const paginatedNftReducer = (state = {}, action) => {
  switch (action.type) {
    case "paginated":
      return action.payload;
    case "disconnect":
      return state + action.payload;
    default:
      return state;
  }
};

export default paginatedNftReducer;
