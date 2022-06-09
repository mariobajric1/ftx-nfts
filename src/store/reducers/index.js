import { combineReducers } from "redux";
import nftReducer from "./nftReducer";
import paginatedNftReducer from "./paginatedNftReducer";
import selectedNftReducer from "./selectedNftReducer";
import selectedNftCollectionReducer from "./selectedNftCollection";

export const rootReducer = combineReducers({
  nftData: nftReducer,
  paginated: paginatedNftReducer,
  selectedNft: selectedNftReducer,
  selectedCollection: selectedNftCollectionReducer,
});

const reducers = (state, action) => rootReducer(state, action);

export default reducers;
