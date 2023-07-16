import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Lottie from "lottie-react-native";

const Loader = () => {
  return (
    <View
      style={{
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Lottie
        source={require("../../assets/main-loader.json")}
        autoPlay
        loop
        style={{ marginBottom: 10, height: 200, width: 200 }}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
