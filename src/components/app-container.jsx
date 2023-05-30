import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import theme from "../theme";

const AppContainer = (props) => {
  return <NavigationContainer>{props.children}</NavigationContainer>;
};

export default AppContainer;
