import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import SafeArea from "../components/safe-area";

const GalleryScreen = () => {
  const [img, setImg] = useState([]);
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



  const renderItem = useCallback(
    ({ item }) => <Image source={item.source} style={styles.image} />,
    []
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
