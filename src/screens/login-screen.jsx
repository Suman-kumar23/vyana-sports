import { View } from "react-native";
import React, { useState } from "react";
import SafeArea from "../components/safe-area";
import { Button, Input, Icon } from "@rneui/themed";
import Lottie from "lottie-react-native";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../store/slices/authSlice";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [errorMsg, setErrorMessage] = useState();

  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const handleLogin = () => {
    dispatch(signIn(email, password));
  };
  return (
    <SafeArea>
      <View
        style={{
          height: "100%",
        }}
      >
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
          <Button title="forgot password" type="clear" onPress={() => {}} />
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
            titleStyle={{ fontWeight: "bold" }}
            onPress={handleLogin}
          />
          <Button
            title="Sign Up"
            type="clear"
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
