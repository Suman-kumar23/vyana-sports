import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AboutScreen, MainScreen, MatchScreen } from "../screens/index";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Match" component={MatchScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
