import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";

const HotTopics = ({ hotTopics }) => {
  const handlePress = () => {};
  return (
    <View
      style={{
        width: "100%",
        marginBottom: 5,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginLeft: 20,
          marginBottom: 10,
        }}
      >
        Hot Topics
      </Text>

      <FlatList
        data={hotTopics}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={handlePress}
            style={{
              width: 200,
              height: 180,
              paddingLeft: 30,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: item.source }}
              style={{
                borderRadius: 10,
                marginBottom: 10,
                height: "85%",
                width: "100%",
              }}
            ></Image>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

export default HotTopics;
