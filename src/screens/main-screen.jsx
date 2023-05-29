import { Text, View, SafeAreaView, Platform, StatusBar } from "react-native";
import React from "react";

const MainScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <SafeAreaView>
        <Text> MainScreen</Text>
      </SafeAreaView>
    </View>
  );
};

export default MainScreen;
