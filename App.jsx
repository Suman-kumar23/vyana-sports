import React from "react";
import AppContainer from "./src/components/app-container";
import Navigator from "./src/index";
import { SafeAreaView, Platform, StatusBar } from "react-native";

export default function App() {
  return (
    <AppContainer>
      <Navigator />
    </AppContainer>
  );
}
