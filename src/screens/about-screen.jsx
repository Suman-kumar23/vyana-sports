import { View, Text } from "react-native";
import React, { useState } from "react";

import SafeArea from "../components/safe-area";

import { Avatar, Button, Divider } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/slices/authSlice";

const AboutScreen = () => {
  const dispatch = useDispatch();
  const handlelogOut = () => {
    dispatch(logOut());
  };

  return (
    <SafeArea>
      <View style={{ justifyContent: "space-between", height: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 30,
            paddingLeft: 30,
          }}
        >
          <Avatar
            rounded
            source={{ uri: "https://placebear.com/400/400" }}
            size={100}
          />
          <View style={{ paddingLeft: 20, paddingBottom: 10 }}>
            <Text>Suman Kumar</Text>
            <Text>suman@test.com</Text>
            <TouchableOpacity>
              <Text style={{ color: "purple" }}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 80 }}>
          <Divider />
          <Button title="Subscriptions" type="clear" />
          <Divider />

          <Button title="Terms & Condition" type="clear" />
          <Divider />
          <Button title="FAQs" type="clear" />
          <Divider />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text variant="bodyLarge">Connect</Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <Ionicons name="ios-logo-instagram" size={40} color="#FD1D1D" />
            <Ionicons name="ios-logo-facebook" size={40} color="#4267B2" />
            <Ionicons name="ios-logo-twitter" size={40} color="#1DA1F2" />
            <Ionicons name="ios-logo-whatsapp" size={40} color="#25D366" />
          </View>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Button
            title="Logout"
            type="clear"
            size="lg"
            onPress={handlelogOut}
          />
          <Text>Version 0.0.1 2023</Text>
        </View>
      </View>
    </SafeArea>
  );
};

export default AboutScreen;
