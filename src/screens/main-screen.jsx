import { ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import CarouselCard from "../components/corousal-card";
import HotTopics from "../components/hot-topics";
import Sponsors from "../components/sponsors";
import Fixtures from "../components/fixtures";
import RelatedArticles from "../components/related-articles";
import Header from "../components/header";
import SafeArea from "../components/safe-area";
import axios from "axios";
import Loader from "../components/loader";

const MainScreen = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [CarouselData, setCarouselData] = useState([]);
  const [HotRespData, setHotRespData] = useState([]);
  const [SponserData, setSponserData] = useState([]);
  const [FixtureData, setFixtureData] = useState([]);
  const [ArticleData, setArticleData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchMainScreenData();
  }, []);

  
  const fetchMainScreenData = async () => {
    const baseUri =
      "https://okhfigjs.api.sanity.io/v2021-10-21/data/query/production?query=";
    const carouselResponse = await axios.get(
      `${baseUri}*%5B_type%3D%3D%27main_carousel%27%5D`
    );

    const hotResponse = await axios.get(
      `${baseUri}*%5B_type%3D%3D%27hotTopics%27%5D`
    );

    const sponsorResponse = await axios.get(
      `${baseUri}*%5B_type%3D%3D%27sponsors%27%5D`
    );
    const fixtureResponse = await axios.get(
      `${baseUri}*%5B_type%3D%3D%27fixtures%27%5D`
    );
    const articleResponse = await axios.get(
      `${baseUri}*%5B_type%3D%3D%27articles%27%5D`
    );
    const carouselData = carouselResponse.data.result;
    const hotResponseData = hotResponse.data.result;
    const sponserData = sponsorResponse.data.result;
    const fixtureData = fixtureResponse.data.result;
    const articleData = articleResponse.data.result;

    setCarouselData(carouselData);
    setHotRespData(hotResponseData);
    setSponserData(sponserData);
    setFixtureData(fixtureData);
    setArticleData(articleData);
    setIsLoading(false);
  };

  return (
    <SafeArea>
      {isLoading ? (
        <Loader />
      ) : (
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
              <CarouselCard mainCarouselData={CarouselData} />
              <HotTopics hotTopics={HotRespData} />
              <Sponsors sponsors={SponserData} />
              <Fixtures fixtures={FixtureData} />
              <RelatedArticles articles={ArticleData} />
            </ScrollView>
          </View>
        </View>
      )}
    </SafeArea>
  );
};

export default MainScreen;
