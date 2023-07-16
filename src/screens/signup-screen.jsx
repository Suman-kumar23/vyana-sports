import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Avatar, Button, Input } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import { setError, signUp } from "../store/slices/authSlice";

import { useDispatch } from "react-redux";

const SignUpScreen = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [selectedImage, setSelectedImage] = useState(
    "https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
  );

  const dispatch = useDispatch();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handleSignUp = () => {
    try {
      if (password !== confirmPassword) {
      } else {
        setLoading(true);
        dispatch(signUp(email, password, name));
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
      }}
    >
      <TouchableOpacity onPress={pickImage}>
        {/* {selectedImage && ( */}
        <Avatar size={120} source={{ uri: selectedImage }} rounded />

        {/* )} */}
      </TouchableOpacity>
      <Input
        placeholder="Full Name"
        style={{ marginTop: 30 }}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Input
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <Button
        title="Sign Up"
        disabled={loading}
        buttonStyle={{
          backgroundColor: "black",
          borderRadius: 30,
          borderColor: "white",
          borderWidth: 2,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{
          fontWeight: "bold",
        }}
        style={{ marginTop: 30 }}
        onPress={handleSignUp}
      />
    </View>
  );
};

export default SignUpScreen;
