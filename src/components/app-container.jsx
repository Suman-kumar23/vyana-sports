import * as React from "react";
import { NavigationContaier } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import theme from "../theme";

export default function AppContainer(props) {
  return (
    <NavigationContaier>
      <NativeBaseProvider theme={theme}> {props.children}</NativeBaseProvider>
    </NavigationContaier>
  );
}
