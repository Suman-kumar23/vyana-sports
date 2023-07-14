import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import CarouselCardItem from "./carousel-card-item";

const data = [
  { id: 1, title: "Title 1", source: "https://picsum.photos/200" },
  { id: 2, title: "Title 2", source: "https://picsum.photos/300" },
  { id: 3, title: "Title 3", source: "https://picsum.photos/400" },
  { id: 4, title: "Title 4", source: "https://picsum.photos/500" },
  { id: 5, title: "Title 5", source: "https://picsum.photos/600" },
  { id: 6, title: "Title 6", source: "https://picsum.photos/700" },
];

const CarouselCard = () => {
  const handleCardPress = () => {};
  return (
    <View
      style={{
        marginTop: 5,
        // backgroundColor: "red",
        height: 250,
        width: "100%",
      }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CarouselCardItem item={item} handleCardPress={handleCardPress} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{}}
        horizontal
      />
    </View>
  );
};

export default CarouselCard;
