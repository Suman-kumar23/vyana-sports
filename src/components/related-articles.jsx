import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const articles = [
  {
    articleId: 1,
    content:
      "This is the paragram that has to be opened in the article file of the article screen. This is the paragram that has to be opened in the article file of the article screen. This is the paragram that has to be opened in the article file of the article screen",
    headerPicSource: "https://picsum.photos/500s",
  },
  {
    articleId: 2,
    content:
      "This is the paragram that has to be opened in the article file of the article screen. This is the paragram that has to be opened in the article file of the article screen. This is the paragram that has to be opened in the article file of the article screen",
    headerPicSource: "https://picsum.photos/500s",
  },
  {
    articleId: 3,
    content:
      "This is the paragram that has to be opened in the article file of the article screen. This is the paragram that has to be opened in the article file of the article screen. This is the paragram that has to be opened in the article file of the article screen",
    headerPicSource: "https://picsum.photos/500s",
  },
  {
    articleId: 4,
    content:
      "This is the paragram that has to be opened in the article file of the article screen. This is the paragram that has to be opened in the article file of the article screen. This is the paragram that has to be opened in the article file of the article screen",
    headerPicSource: "https://picsum.photos/500s",
  },
  {
    articleId: 5,
    content:
      "This is the paragram that has to be opened in the article file of the article screen. This is the paragram that has to be opened in the article file of the article screen. This is the paragram that has to be opened in the article file of the article screen",
    headerPicSource: "https://picsum.photos/500s",
  },
];

const RelatedArticles = () => {
  return (
    <View style={{ marginHorizontal: 30, marginBottom: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 , marginLeft : '25%'}}>
        Related Articles
      </Text>
      <View>
        {articles.map((article) => (
          <TouchableOpacity>
            <View>
              <Text style={{ fontSize: 16, marginBottom: 20 }}>
                {article.content}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default RelatedArticles;
