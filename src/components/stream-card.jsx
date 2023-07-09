import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const StreamCard = (props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{props.title}</Text>
      <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{
          height: 200,
          width: "100%",
          position: "relative",
          borderRadius: 10,
          // resizeMode: "cover",
        }}
      />
      <Text style={{ position: "absolute", bottom: 8, right: 16 }}>
        <Ionicons name="eye" />
        Watch
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 0,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 30,
  },
  title: {
    fontSize: 24,
    position: "absolute",
    zIndex: 1,
    top: 8,
    left: 10,
  },
});

export default StreamCard;
