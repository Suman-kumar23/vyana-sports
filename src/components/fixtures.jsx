import { View, Text, Pressable } from "react-native";

import React, { useState } from "react";
import { Avatar } from "@rneui/themed";

const fixtures = [
  { team1: "Team A", team2: "Team B", date: "2023-07-15", venue: "Stadium X" },
  { team1: "Team A", team2: "Team B", date: "2023-07-15", venue: "Stadium X" },
  { team1: "Team A", team2: "Team B", date: "2023-07-15", venue: "Stadium X" },
  { team1: "Team A", team2: "Team B", date: "2023-07-15", venue: "Stadium X" },
];

const Fixtures = () => {
  return (
    <View>
      <Text
        style={{
          marginBottom: 20,
          fontSize: 24,
          fontWeight: "bold",
          paddingLeft: 20,
        }}
      >
        Fixtures
      </Text>
      {fixtures.map((fixture, index) => (
        <Pressable key={index} onPress={() => console.log("Pressed")}>
          <View
            style={{
              height: 80,
              width: "80%",
              marginBottom: 20,
              alignItems: "center",
              justifyContent: "center",
              left: "10%",
              borderRadius: 10,
              overflow: "hidden",
              borderColor: "gray",
              borderWidth: 1.5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                margin: 0,
              }}
            >
              <View
                style={{
                  flex: 1,
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  size={50}
                  source={{ uri: "https://picsum.photos/300" }}
                />
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                  {fixture.team1}
                </Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View>
                  <Text>Date : {fixture.date}</Text>
                </View>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>V/S</Text>
                <View>
                  <Text>Venue : {fixture.venue}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  size={50}
                  source={{ uri: "https://picsum.photos/300" }}
                />
                <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                  {fixture.team2}
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default Fixtures;
