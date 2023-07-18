import { View, Text, Pressable } from "react-native";
import React, { createRef, useState } from "react";
import { Button, Input, Overlay } from "@rneui/themed";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const FPScreen = ({ navigation }) => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [errorMsg, setErrorMessage] = useState("");
  const toggleOverlay = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleReset = async () => {
    console.log(email);

    try {
      await sendPasswordResetEmail(auth, email).then(() => {
        setIsModalVisible(true);
        navigation.navigate("Login");
      });
    } catch (e) {
      setErrorMessage("Email not registered. Please Sign up");
    }
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
        paddingHorizontal: 10,
        gap: 30,
      }}
    >
      <Overlay isVisible={isModalVisible} onBackdropPress={toggleOverlay} style={{}}>
        <Text>Email Sent.</Text>
        <Text>Please check your email.</Text>
        <Button>Go back to login</Button>
      </Overlay>
      <Text style={{ fontSize: 18, fontWeight: "500" }}>
        Enter email linked to your account
      </Text>
      <Input
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        errorMessage={errorMsg}
      />
      <Button
        title="Send Reset Link"
        buttonStyle={{
          backgroundColor: "black",
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{ fontWeight: 500 }}
        onPress={handleReset}
      />
    </View>
  );
};

export default FPScreen;
