import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Screens
import MainScreen from "./screens/main-screen";
import AboutScreen from "./screens/about-screen";
import LiveScreen from "./screens/live-screen";
import PhotoScreen from "./screens/photo-screen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
            size = focused ? size + 8 : size + 5;
          } else if (route.name === "Live") {
            iconName = focused ? "ios-tv" : "ios-tv-outline";
            size = focused ? size + 8 : size + 5;
          } else if (route.name === "Photos") {
            iconName = focused ? "image" : "image-outline";
            size = focused ? size + 8 : size + 5;
          } else if (route.name === "About") {
            iconName = focused ? "person-sharp" : "person-outline";
            size = focused ? size + 8 : size + 5;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          paddingBottom: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={MainScreen} />
      <Tab.Screen name="Live" component={LiveScreen} />
      <Tab.Screen name="Photos" component={PhotoScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
};

export default App;
