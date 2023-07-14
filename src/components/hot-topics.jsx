import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";

const data = [
  { id: 1, title: "Title 1", source: "https://picsum.photos/200" },
  { id: 2, title: "Title 2", source: "https://picsum.photos/300" },
  { id: 3, title: "Title 3", source: "https://picsum.photos/400" },
  { id: 4, title: "Title 4", source: "https://picsum.photos/500" },
  { id: 5, title: "Title 5", source: "https://picsum.photos/600" },
  { id: 6, title: "Title 6", source: "https://picsum.photos/700" },
];
const HotTopics = () => {
  const handlePress = () => {};
  return (
    <View
      style={{
        // marginTop: 5,
        // backgroundColor: "red",
        height: 160,
        width: "100%",
        marginBottom: 5,
        
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginLeft: 20,
          marginBottom: 10,
        }}
      >
        Hot Topics
      </Text>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={handlePress}
              style={{
                width: 200,
                justifyContent: "space-between",
                paddingLeft: 30,

                // backgroundColor: "red",
              }}
            >
              <Image
                source={{ uri: item.source, height: "85%", width: "100%" }}
                style={{ borderRadius: 10 }}
              ></Image>
              <Text style={{ bottom: 5, left: 60 }}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          horizontal
        />
      </View>
    </View>
  );
};

export default HotTopics;
