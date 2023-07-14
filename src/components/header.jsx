import { View, Text, Image } from "react-native";
import React from "react";
import { Header } from "@rneui/themed";
import SafeArea from "./safe-area";

const logo = require("../../assets/logo.png");

const HeaderComponent = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 50,
        // backgroundColor: "aqua",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "50%",
          height: "100%",
          //   backgroundColor: "red",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Image source={logo} style={{ height: 40, width: 60 }} />
        <Text style={{ fontSize: 30, fontWeight: "bold", fontFamily: "" }}>
          Vyana Sports
        </Text>
      </View>
    </View>
  );
};

export default HeaderComponent;
