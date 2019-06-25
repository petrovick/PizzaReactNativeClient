import { all, takeLatest } from "redux-saga/effects";

import { AuthTypes } from "~/store/ducks/auth";
import { ProductsTypes } from "~/store/ducks/products";
import { ProductTypesTypes } from "~/store/ducks/productTypes";

import { signIn, signUp } from "./auth";
import { listProducts } from "./products";
import { listProductTypes } from "./productTypes";

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
    //Products
    takeLatest(ProductsTypes.PRODUCTS_LIST_REQUEST, listProducts),
    //Product Types
    takeLatest(ProductTypesTypes.PRODUCT_TYPES_LIST_REQUEST, listProductTypes)
  ]);
}
