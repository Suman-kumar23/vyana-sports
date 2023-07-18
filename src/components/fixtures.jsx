import { View, Text, Pressable } from "react-native";

import React, { useEffect, useState } from "react";
import { Avatar } from "@rneui/themed";
import axios from "axios";

// const fixtures = [
//   { team1: "Team A", team2: "Team B", date: "2023-07-15", venue: "Stadium X" },
//   { team1: "Team A", team2: "Team B", date: "2023-07-15", venue: "Stadium X" },
//   { team1: "Team A", team2: "Team B", date: "2023-07-15", venue: "Stadium X" },
//   { team1: "Team A", team2: "Team B", date: "2023-07-15", venue: "Stadium X" },
// ];

const Fixtures = ({ fixtures }) => {
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
              width: "88%",
              marginBottom: 20,
              alignItems: "center",
              justifyContent: "center",
              left: "6%",
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
                  {fixture.Team_1}
                </Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View>
                  <Text>Date : {fixture.Date}</Text>
                </View>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>V/S</Text>
                <View>
                  <Text>Venue : {fixture.Venue}</Text>
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
                  {fixture.Team_2}
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
