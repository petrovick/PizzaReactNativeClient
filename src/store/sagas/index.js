import { all, takeLatest } from "redux-saga/effects";

import { AuthTypes } from "~/store/ducks/auth";
import { ProductsTypes } from "~/store/ducks/products";
import { ProductTypesTypes } from "~/store/ducks/productTypes";
import { ProductSizesTypes } from "~/store/ducks/productSizes";
import { OrdersTypes } from "~/store/ducks/orders";
import { CartTypes } from "~/store/ducks/cart";

import { signIn, signUp } from "./auth";
import { listProducts } from "./products";
import { listProductTypes } from "./productTypes";
import { listProductSizes } from "./productSizes";
import { listOrders } from "./orders";
import { commitCheckoutOrder } from "./cart";

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
    //Products
    takeLatest(ProductsTypes.PRODUCTS_LIST_REQUEST, listProducts),
    //Product Types
    takeLatest(ProductTypesTypes.PRODUCT_TYPES_LIST_REQUEST, listProductTypes),
    //Product Sizes
    takeLatest(ProductSizesTypes.PRODUCT_SIZES_LIST_REQUEST, listProductSizes),
    //Orders
    takeLatest(OrdersTypes.ORDERS_LIST_REQUEST, listOrders),
    //Cart
    takeLatest(CartTypes.COMMIT_CHECKOUT_ORDER_REQUEST, commitCheckoutOrder)
  ]);
}
