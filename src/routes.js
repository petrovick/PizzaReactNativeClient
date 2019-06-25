import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Login from "~/pages/auth/Login";
import SignUp from "~/pages/auth/SignUp";
import Products from "~/pages/Products";
import ProductsTypes from "~/pages/ProductsTypes";
import ProductsSizes from "~/pages/ProductsSizes";
import Cart from "~/pages/Cart";
import Checkout from "~/pages/Checkout";
import Orders from "~/pages/Orders";

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Login,
      SignUp,
      Products,
      ProductsTypes,
      ProductsSizes,
      Cart,
      Checkout,
      Orders
    },
    {
      defaultNavigationOptions: {
        header: null
      }
    }
  )
);

export default Routes;
