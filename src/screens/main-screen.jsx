import { Text } from "react-native";
import React from "react";
import SafeArea from "../components/safe-area";
import { Avatar } from "@rneui/themed";

const MainScreen = () => {
  return (
    <SafeArea>
      <Text> MainScreen</Text>
      <Avatar
        size={160}
        rounded
        source={{ uri: "https://placebear.com/400/400" }}
      />
    </SafeArea>
  );
};

export default MainScreen;
