import "~/config/ReactotronConfig";
import React, { Component } from "react";
import { Toast } from "react-native-redux-toast";
import { Provider } from "react-redux";

import store from "~/store";
import Routes from "~/routes";
import { Text, View } from "react-native";
import { setNavigator } from "./services/navigation";

const App = () => (
  <Provider store={store}>
    <Routes ref={setNavigator} />
    <Toast />
  </Provider>
);
export default App;
