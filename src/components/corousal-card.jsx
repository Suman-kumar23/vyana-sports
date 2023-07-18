import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import CarouselCardItem from "./carousel-card-item";
import axios from "axios";

const CarouselCard = ({ mainCarouselData }) => {
  const handleCardPress = () => {};
  return (
    <View
      style={{
        marginTop: 5,
        height: 250,
        width: "100%",
      }}
    >
      <FlatList
        data={mainCarouselData}
        renderItem={({ item }) => (
          <CarouselCardItem item={item} handleCardPress={handleCardPress} />
        )}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{}}
        horizontal
      />
    </View>
  );
};

export default CarouselCard;
