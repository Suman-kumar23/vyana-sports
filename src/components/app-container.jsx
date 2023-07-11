import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "../store";

const AppContainer = (props) => {
  return (
    <Provider store={store}>
      <NavigationContainer>{props.children}</NavigationContainer>
    </Provider>
  );
};

export default AppContainer;
