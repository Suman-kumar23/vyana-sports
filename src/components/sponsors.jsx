import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Avatar } from "@rneui/themed";

const sponsors = [
  { id: 1, source: "https://picsum.photos/800" },
  { id: 2, source: "https://picsum.photos/900" },
  { id: 3, source: "https://picsum.photos/1000" },
  { id: 4, source: "https://picsum.photos/1100" },
  { id: 5, source: "https://picsum.photos/500" },
  { id: 6, source: "https://picsum.photos/600" },
  { id: 7, source: "https://picsum.photos/600" },
  { id: 8, source: "https://picsum.photos/600" },
  { id: 9, source: "https://picsum.photos/600" },
  { id: 10, source: "https://picsum.photos/600" },
];

const Sponsors = () => {
  return (
    <View
      style={{
        marginTop: 20,
        width: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 10,
          marginLeft: 20,
        }}
      >
        Sponsers
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          paddingLeft: 40,
          gap: 10,
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        {sponsors.map((sponsor) => (
          <TouchableOpacity key={sponsor.id}>
            <Avatar source={{ uri: sponsor.source }} rounded size={60} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Sponsors;
