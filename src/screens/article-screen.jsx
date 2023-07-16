import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Image } from "@rneui/themed";
import HeaderComponent from "../components/header";
import SafeArea from "../components/safe-area";

const ArticleScreen = () => {
  const route = useRoute();
  const { articleId, heading, content, headerPicSource } = route.params.item;
  return (
    <SafeArea>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <HeaderComponent />
        <View style={{ backgroundColor: "blue", marginBottom: 20 }}>
          <Image
            source={{ uri: headerPicSource }}
            style={{ height: 150, width: 500 }}
          />
          <Text
            style={{
              position: "absolute",
              left: 60,
              bottom: 10,
              fontSize: 40,
              color: "white",
              fontWeight: "500",
            }}
          >
            {heading}
          </Text>
        </View>
        <View style={{ marginHorizontal: 20, width: "90%" }}>
          <Text style={{ fontSize: 20, fontWeight: "400" }}>{content}</Text>
        </View>
      </View>
    </SafeArea>
  );
};

export default ArticleScreen;
