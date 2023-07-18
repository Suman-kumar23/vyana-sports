import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Constants } from "expo-constants";

// const data = [
//   { id: 1, title: "Title 1", source: "https://picsum.photos/200" },
//   { id: 2, title: "Title 2", source: "https://picsum.photos/300" },
//   { id: 3, title: "Title 3", source: "https://picsum.photos/400" },
//   { id: 4, title: "Title 4", source: "https://picsum.photos/500" },
//   { id: 5, title: "Title 5", source: "https://picsum.photos/600" },
//   { id: 6, title: "Title 6", source: "https://picsum.photos/700" },
// ];

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
              source={{ uri: item.source, height: "85%", width: "100%" }}
              style={{ borderRadius: 10, marginBottom: 10 }}
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
