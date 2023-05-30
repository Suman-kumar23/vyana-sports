import { View, Platform, StatusBar, SafeAreaView } from "react-native";
import React from "react";

const SafeArea = (props) => {
  return (
    <View
      style={{
        paddingTop:
          Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
        flex: 1,
        margin: 5,
      }}
    >
      <SafeAreaView>{props.children}</SafeAreaView>
    </View>
  );
};

export default SafeArea;
