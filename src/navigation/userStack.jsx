import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Screens
import { AboutScreen, GalleryScreen, LiveScreen, MainScreen } from "../screens";
import VideoScreen from "../screens/video-screen";
import { createStackNavigator } from "@react-navigation/stack";
import ArticleScreen from "../screens/article-screen";

const Tab = createBottomTabNavigator();

const VideoStack = createStackNavigator();
const MainStack = createStackNavigator();

const VideoScreenStack = () => {
  return (
    <VideoStack.Navigator
      initialRouteName="Live"
      screenOptions={{ headerShown: false }}
    >
      <VideoStack.Screen name="Live" component={LiveScreen} />
      <VideoStack.Screen name="Player" component={VideoScreen} />
    </VideoStack.Navigator>
  );
};

const MainScreenStack = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="Main" component={MainScreen} />
      <MainStack.Screen name="Player" component={VideoScreen} />
      <MainStack.Screen name="Article" component={ArticleScreen} />
    </MainStack.Navigator>
  );
};


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
          } else if (route.name === "Stream") {
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
      <Tab.Screen name="Home" component={MainScreenStack} />
      <Tab.Screen name="Stream" component={VideoScreenStack} />
      <Tab.Screen name="Photos" component={GalleryScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
};

export default App;
