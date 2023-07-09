import { Text, View, SafeAreaView, Platform, StatusBar } from "react-native";
import React from "react";
import SafeArea from "../components/safe-area";
import { Avatar } from "react-native-paper";

const MainScreen = () => {
  return (
    <SafeArea>
      <Text> MainScreen</Text>
      <Avatar.Image
        size={160}
        source={{ uri: "https://placebear.com/400/400" }}
      />
    </SafeArea>
  );
};

export default MainScreen;
