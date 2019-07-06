import "~/config/ReactotronConfig";
import React, { Component } from "react";
import { Toast } from "react-native-redux-toast";
import { Provider } from "react-redux";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
addLocaleData([...en]);

import store from "~/store";
import Routes from "~/routes";
import { Text, View } from "react-native";
import { setNavigator } from "./services/navigation";

const App = () => (
  <Provider store={store}>
    <IntlProvider locale="en">
      <Routes ref={setNavigator} />
    </IntlProvider>
    <Toast />
  </Provider>
);
export default App;
