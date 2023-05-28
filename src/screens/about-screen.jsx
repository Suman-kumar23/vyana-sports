import { View, Text } from "react-native";
import React from "react";
import { Avatar } from "native-base";

const AboutScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Avatar source={{ uri: "https://placebear.com/400/400" }} size="xl" />
      <Text>AboutScreen</Text>
    </View>
  );
};

export default AboutScreen;
