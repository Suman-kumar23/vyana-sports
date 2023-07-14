import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CarouselCardItem = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 320,
        justifyContent: "space-between",
        paddingLeft: 30,
      }}
    >
      <Image
        source={{
          uri: item.source,
          height: "90%",
          width: "100%",
        }}
        style={{
          borderRadius: 10,
          
        }}
        resizeMode="cover"
      />
      <Text style={{ position: "absolute", bottom: 40, left: 80 }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CarouselCardItem;
