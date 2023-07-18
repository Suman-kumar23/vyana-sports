import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import React from "react";

const CarouselCardItem = ({ item }) => {
  return (
    <Pressable
      style={{
        width: 320,
        justifyContent: "space-between",
        paddingLeft: 30,
      }}
    >
      <Image
        source={{
          uri: item.picSource,
        }}
        style={{
          borderRadius: 10,
          height: "90%",
          width: "100%",
        }}
        resizeMode="cover"
      />
      <Text
        style={{
          position: "absolute",
          bottom: 40,
          left: 80,
          fontSize: 24,
          fontWeight: "400",
          color: "white",
        }}
      >
        {item.title}
      </Text>
    </Pressable>
  );
};

export default CarouselCardItem;
