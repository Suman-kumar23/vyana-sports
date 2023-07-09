import { View, Text } from "react-native";
import React, { useState } from "react";

import SafeArea from "../components/safe-area";
import { Avatar, Button, Divider, Modal, Portal } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const AboutScreen = () => {
  const [visibleLanguage, setVisibleLanguage] = useState(false);
  const showLanguageModal = () => {
    setVisibleLanguage(true);
  };
  const hideLanguageModal = () => {
    setVisibleLanguage(false);
  };
  const containerStyle = { backgroundColor: "white", padding: 20 };
  return (
    <SafeArea>
      <Portal>
        <Modal
          visible={visibleLanguage}
          onDismiss={hideLanguageModal}
          contentContainerStyle={containerStyle}
        >
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>

      <View style={{ justifyContent: "space-between", height: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",

            marginTop: 30,

            paddingLeft: 30,
          }}
        >
          <Avatar.Image
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
          <Button>
            <Text style={{ fontSize: 20, color: "#000000" }}>Subscription</Text>
          </Button>
          <Divider />
          <Button onPress={showLanguageModal}>
            {" "}
            <Text style={{ fontSize: 20, color: "#000000" }}>
              Select Language
            </Text>
          </Button>
          <Divider />
          <Button>
            {" "}
            <Text style={{ fontSize: 20, color: "#000000" }}>
              Term & Condition
            </Text>
          </Button>
          <Divider />
          <Button>
            {" "}
            <Text style={{ fontSize: 20, color: "#000000" }}>FAQs</Text>
          </Button>
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
          <Button>Logout</Button>
          <Text>Version 0.0.1 2023</Text>
        </View>
      </View>
    </SafeArea>
  );
};

export default AboutScreen;
