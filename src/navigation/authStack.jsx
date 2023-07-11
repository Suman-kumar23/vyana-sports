import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, SignUpScreen, FPScreen } from "../screens";

const options = {
  headerShown: false,
};

const AuthStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={options}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={FPScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
