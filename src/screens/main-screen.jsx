import { ScrollView, Text, View } from "react-native";
import React from "react";

import CarouselCard from "../components/corousal-card";
import HotTopics from "../components/hot-topics";
import Sponsors from "../components/sponsors";
import Fixtures from "../components/fixtures";
import RelatedArticles from "../components/related-articles";
import Header from "../components/header";
import SafeArea from "../components/safe-area";

const MainScreen = () => {
  return (
    <SafeArea>
      <View
        style={{
          height: "100%",
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Header />
          <ScrollView style={{ width: "100%" }}>
            <CarouselCard />
            <HotTopics />
            <Sponsors />
            <Fixtures />
            <RelatedArticles />
          </ScrollView>
        </View>
      </View>
    </SafeArea>
  );
};

export default MainScreen;
