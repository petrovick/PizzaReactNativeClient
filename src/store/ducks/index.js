import { combineReducers } from "redux";
import { toastReducer as toast } from "react-native-redux-toast";

import { reducer as auth } from "./auth";
import { reducer as products } from "./products";
import { reducer as productTypes } from "./productTypes";
import { reducer as productSizes } from "./productSizes";
import { reducer as orders } from "./orders";
import { reducer as cart } from "./cart";

export default combineReducers({
  toast,
  auth,
  products,
  productTypes,
  productSizes,
  orders,
  cart
});
