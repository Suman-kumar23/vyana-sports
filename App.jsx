import React from "react";
import AppContainer from "./src/components/app-container";
import Navigator from "./src/navigation";
import "react-native-url-polyfill";

export default function App() {
  return (
    <AppContainer>
      <Navigator />
    </AppContainer>
  );
}
