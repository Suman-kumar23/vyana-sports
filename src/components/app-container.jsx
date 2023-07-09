import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";


const AppContainer = (props) => {
  return (
    <NavigationContainer>
      <PaperProvider>{props.children}</PaperProvider>
    </NavigationContainer>
  );
};

export default AppContainer;
