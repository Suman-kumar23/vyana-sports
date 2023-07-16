import React from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import SafeArea from "../components/safe-area";
import { Ionicons } from "@expo/vector-icons";

const GalleryScreen = () => {
  const images = [
    { id: "1", source: require("../../assets/photo.jpeg") },
    { id: "2", source: require("../../assets/photo.jpeg") },
    { id: "3", source: require("../../assets/photo.jpeg") },
    { id: "4", source: require("../../assets/photo.jpeg") },
    { id: "5", source: require("../../assets/photo.jpeg") },
    { id: "6", source: require("../../assets/photo.jpeg") },
    { id: "7", source: require("../../assets/photo.jpeg") },

    // Add more images as needed
  ];

  const renderItem = ({ item }) => (
    <Image source={item.source} style={styles.image} />
  );

  return (
    <SafeArea>
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
          }}
        >
          <FlatList
            data={images}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
          />
        </View>
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    margin: 5,
    resizeMode: "cover",
    borderRadius: 5,
  },
});

export default GalleryScreen;
