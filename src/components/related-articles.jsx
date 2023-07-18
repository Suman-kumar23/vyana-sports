import { View, Text, FlatList, Pressable } from "react-native";
import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

const RelatedArticles = ({ articles }) => {
  const navigation = useNavigation();

  const renderItem = useCallback(
    ({ item }) => (
      <Pressable onPress={() => navigation.navigate("Article", { item })}>
        <View
          key={item.articleId}
          style={{
            overflow: "hidden",
            paddingHorizontal: 15,
            paddingTop: 10,
            backgroundColor: "#f5f5dc",
            elevation: 8,
            shadowColor: "gray",
            shadowRadius: 8,
            borderRadius: 8,
            marginVertical: 10,
          }}
        >
          <View
            style={{
              padding: 10,
              height: 75,
              overflow: "hidden",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 10,
                textTransform: "uppercase",
              }}
            >
              {item.heading}
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 10,
              }}
            >
              {item.content}
            </Text>
          </View>
        </View>
      </Pressable>
    ),
    []
  );

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Related Articles
      </Text>
      <View>
        <FlatList
          data={articles}
          renderItem={renderItem}
          keyExtractor={(item) => item.articleId}
        />
      </View>
    </View>
  );
};

export default RelatedArticles;
