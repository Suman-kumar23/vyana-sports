import { Avatar, Button, Input } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { signUp } from "../store/slices/authSlice";

import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import HeaderComponent from "../components/header";

const SignUpScreen = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [selectedImage, setSelectedImage] = useState(
    "https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
  );
  const [msg, setMsg] = useState("");
  const [img, setImg] = useState("");

  const dispatch = useDispatch();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      base64: true,
    });
    let base64img = `data:image/jpg;base64,${result.assets[0].base64}`;
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setImg(base64img);
    }
  };

  const auth = getAuth();

  const handleSignUp = () => {
    setLoading(true);
    dispatch(signUp(email, password, name, img));
    setLoading(false);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",

        padding: 30,
        marginTop: 20,
      }}
    >
      <HeaderComponent />
      <View
        style={{
          marginTop: 20,
        }}
      >
        <TouchableOpacity onPress={pickImage}>
          <Avatar size={120} source={{ uri: selectedImage }} rounded />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
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
          errorMessage={msg}
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
    </View>
  );
};

export default SignUpScreen;
