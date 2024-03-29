import { View, Platform, StatusBar, SafeAreaView } from "react-native";
import React from "react";

const SafeArea = (props) => {
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>{props.children}</SafeAreaView>
    </View>
  );
};

export default SafeArea;
