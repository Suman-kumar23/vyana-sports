import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const articles = [
  {
    articleId: 1,
    heading: "Cricket New Features",
    content:
      "TPrior to v2.0.0, this package would generate HTML required for the youtube iframe and serve it as raw HTML string. This meant that the base URL would be 'about:blank' and leading to a number of videos showing a \"embed not allowed\" error message.\
       To mitigate this - the webpage had to be uploaded on to a trustable remote source (github pages). The source code of the static HTML is minified and uploaded as a part of the documentation website here.\
       For whatever reason, if you would like to host this page on your own web server - the static HTML source can be hosted as it is. (not recommended since manual update will be required)",
    headerPicSource: "https://picsum.photos/500",
  },
  {
    articleId: 2,
    heading: "Heading 1 ",

    content:
      "This is the paragram that has to be opened in the article file of the article screen. This is the paragram that has to be opened in the article file of the article screen. This is the paragram that has to be opened in the article file of the article screen",
    headerPicSource: "https://picsum.photos/500",
  },
  {
    articleId: 3,
    heading: "Heading 1 ",

    content:
      "This is the paragram that has to be opened in the article file of the article screen. This is the paragram that has to be opened in the article file of the article screen. This is the paragram that has to be opened in the article file of the article screen",
    headerPicSource: "https://picsum.photos/500",
  },
  {
    articleId: 4,
    heading: "Heading 1 ",

    content:
      "This is the paragram that has to be opened in the article file of the article screen. This is the paragram that has to be opened in the article file of the article screen. This is the paragram that has to be opened in the article file of the article screen",
    headerPicSource: "https://picsum.photos/500",
  },
  {
    articleId: 5,
    heading: "Heading 1 ",

    content:
      "This is the paragram that has to be opened in the article file of the article screen. This is the paragram that has to be opened in the article file of the article screen. This is the paragram that has to be opened in the article file of the article screen",
    headerPicSource: "https://picsum.photos/500",
  },
];

const RelatedArticles = () => {
  const navigation = useNavigation();
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
          // backgroundColor: "red",
        }}
      >
        Related Articles
      </Text>
      <View>
        <FlatList
          data={articles}
          renderItem={({ item }) => (
            <Pressable onPress={() => navigation.navigate("Article", { item })}>
              <View
                key={item.articleId}
                style={{
                  overflow: "hidden",
                  padding: 10,
                  backgroundColor: "#f5f5dc",
                  elevation: 8,
                  shadowColor: "gray",
                  borderRadius: 8,
                  marginVertical: 10,
                  marginBottom: 8,
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

                      // fontFamily: "Roboto",
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
          )}
          keyExtractor={(item) => item.articleId}
        />
      </View>
    </View>
  );
};

export default RelatedArticles;
