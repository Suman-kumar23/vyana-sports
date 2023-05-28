import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons";

// Screens
import MainScreen from "./screens/main-screen";
import AboutScreen from "./screens/about-screen";
import LiveScreen from "./screens/live-screen";
import PhotoScreen from "./screens/photo-screen";

// Components
// import Sidebar from "./components/sidebar";

const Tab = createBottomTabNavigator();

const App = () => {
  const screenOptions = {
    tabBarOptions: {
      fontSize: 40,
    },
    tabBarStyle: {
      height: 75,
    },
    tabBarItemStyle: {
      marginBottom: 15,
      // fontSize: 40,
    },
    headerShown: false,
    tabBarActiveTintColor: "#e91e63",
  };

  return (
    <Tab.Navigator initialRouteName="Home" {...{ screenOptions }}>
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: (tabInfo) => {
            <Ionicons
              name="md-home"
              size={tabInfo.focused ? 26 : 20}
              color={tabInfo.tintColor}
            />;
          },
        }}
      />
      <Tab.Screen
        name="Live"
        component={LiveScreen}
        options={{
          tabBarLabel: "Live",
          tabBarIcon: (tabInfo) => {
            <Ionicons
              name="md-home"
              size={tabInfo.focused ? 26 : 20}
              color={tabInfo.tintColor}
            />;
          },
        }}
      />
      <Tab.Screen
        name="Photos"
        component={PhotoScreen}
        options={{
          tabBarLabel: "Photos",
          tabBarIcon: (tabInfo) => {
            <Ionicons
              name="md-home"
              size={tabInfo.focused ? 26 : 20}
              color={tabInfo.tintColor}
            />;
          },
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: "About",
          tabBarIcon: (tabInfo) => {
            <Ionicons
              name="md-home"
              size={tabInfo.focused ? 26 : 20}
              color={tabInfo.tintColor}
            />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
