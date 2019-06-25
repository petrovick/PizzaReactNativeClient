import { combineReducers } from "redux";

import { reducer as auth } from "./auth";
import { reducer as products } from "./products";
import { reducer as productTypes } from "./productTypes";

export default combineReducers({
  auth,
  products,
  productTypes
});
