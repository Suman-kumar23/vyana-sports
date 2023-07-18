import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar } from "@rneui/themed";
import axios from "axios";
import Constants from "expo-constants";

const Sponsors = ({ sponsors }) => {
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
          <TouchableOpacity key={sponsor._id}>
            <Avatar source={{ uri: sponsor.source }} rounded size={60} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Sponsors;
