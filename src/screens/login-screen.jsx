import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Icon, Input } from "@rneui/themed";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Lottie from "lottie-react-native";
import React, { useState } from "react";
import { View } from "react-native";
import HeaderComponent from "../components/header";
import SafeArea from "../components/safe-area";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [errorMsg, setErrorMessage] = useState();

  const handleLogin = async () => {
    const auth = getAuth();
    const db = getFirestore();
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const docRef = doc(db, "users", response.user.uid);
      const docSnap = await getDoc(docRef);

      const userData = docSnap.data();

      const user = {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        pic: userData.pic,
        isSubscribed: userData.isSubscribed,
      };

      await AsyncStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <SafeArea>
      <View
        style={{
          height: "100%",
          marginTop: 10,
        }}
      >
        <HeaderComponent />
        <View
          style={{
            padding: 30,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Lottie
            source={require("../../assets/sports-loader.json")}
            autoPlay
            loop
            style={{ marginBottom: 10, height: 200, width: 200 }}
          />

          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            placeholder="Password"
            secureTextEntry={passwordShown}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
            errorMessage={errorMsg}
            rightIcon={
              <Icon
                name="eye"
                type="ionicon"
                onPress={() => setPasswordShown(!passwordShown)}
              />
            }
          />
          <Button
            title="forgot password"
            type="clear"
            titleStyle={{ fontSize: 14, color: "gray", fontWeight: "500" }}
            onPress={() => {
              navigation.navigate("ForgotPassword");
            }}
          />
          <Button
            title="LOG IN"
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
            titleStyle={{ fontWeight: "bold", fontSize: 18 }}
            onPress={handleLogin}
          />
          <Button
            title="Sign Up"
            type="clear"
            titleStyle={{ fontWeight: "bold", fontSize: 18, color: "black" }}
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          />
        </View>
      </View>
    </SafeArea>
  );
};

export default LoginScreen;
