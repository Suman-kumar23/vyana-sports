import { View, Text, Linking } from "react-native";
import React from "react";


import SafeArea from "../components/safe-area";

import { Avatar, Button, Divider } from "@rneui/themed";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/slices/authSlice";

const AboutScreen = () => {
  const dispatch = useDispatch();

  const url = {
    whatsappURL: "",
    facebookURL: "",
    twitterURL: "",
    instagramURL: "",
  };

  const handlelogOut = () => {
    dispatch(logOut());
  };
  const user = useSelector((state) => state.auth.user);

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
            source={{ uri: user.pic ? user.pic : "https:picsum.photos/400" }}
            size={100}
          />
          <View style={{ paddingLeft: 20, paddingBottom: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "500", marginBottom: 4 }}>
              {user.name}
            </Text>
            <Text style={{ marginBottom: 10, fontSize: 16, fontWeight: "400" }}>
              {user.email}
            </Text>
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
            <Ionicons
              name="ios-logo-instagram"
              size={40}
              color="#FD1D1D"
              onPress={() => {
                Linking.openURL(url.instagramURL);
              }}
            />
            <Ionicons
              name="ios-logo-facebook"
              size={40}
              color="#4267B2"
              onPress={() => {
                Linking.openURL(url.facebookURL);
              }}
            />
            <Ionicons
              name="ios-logo-twitter"
              size={40}
              color="#1DA1F2"
              onPress={() => {
                Linking.openURL(url.twitterURL);
              }}
            />
            <Ionicons
              name="ios-logo-whatsapp"
              size={40}
              color="#25D366"
              onPress={() => {
                Linking.openURL(url.whatsappURL);
              }}
            />
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
