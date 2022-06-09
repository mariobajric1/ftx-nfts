import * as actions from "..";

export const connectNftData = (nftData) => {
  return (dispatch) => {
    dispatch({
      type: "connected",
      payload: nftData,
    });
  };
};

export const connectPaginatedNftData = (paginated) => {
  return (dispatch) => {
    dispatch({
      type: "paginated",
      payload: paginated,
    });
  };
};

export const selectedNft = (selected) => {
  return (dispatch) => {
    dispatch({
      type: "selectednft",
      payload: selected,
    });
  };
};

export const selectedCollection = (selectedCollection) => {
  return (dispatch) => {
    dispatch({
      type: "selectedCollection",
      payload: selectedCollection,
    });
  };
};
