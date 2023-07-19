import { FlatList, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

// Component Imports
import CarouselCard from "../components/corousal-card";
import HotTopics from "../components/hot-topics";
import Sponsors from "../components/sponsors";
import Fixtures from "../components/fixtures";
import RelatedArticles from "../components/related-articles";
import Header from "../components/header";
import SafeArea from "../components/safe-area";
import Loader from "../components/loader";

// MainScreen
const MainScreen = () => {
  // States
  const [isLoading, setIsLoading] = useState(false);
  const [CarouselData, setCarouselData] = useState([]);
  const [HotRespData, setHotRespData] = useState([]);
  const [SponserData, setSponserData] = useState([]);
  const [FixtureData, setFixtureData] = useState([]);
  const [ArticleData, setArticleData] = useState([]);

  // DataFetching while mounting
  useEffect(() => {
    setIsLoading(true);
    fetchMainScreenData();
  }, []);

  const fetchMainScreenData = useCallback(async () => {
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
  }, []);

  const data = [
    { id: "1", type: "carousel", data: CarouselData },
    { id: "2", type: "hotTopics", data: HotRespData },
    { id: "3", type: "sponsors", data: SponserData },
    { id: "4", type: "fixtures", data: FixtureData },
    { id: "5", type: "relatedArticles", data: ArticleData },
  ];

  const renderComponent = useCallback(({ item }) => {
    if (item.type === "carousel") {
      return <CarouselCard mainCarouselData={item.data} />;
    } else if (item.type === "hotTopics") {
      return <HotTopics hotTopics={item.data} />;
    } else if (item.type === "sponsors") {
      return <Sponsors sponsors={item.data} />;
    } else if (item.type === "fixtures") {
      return <Fixtures fixtures={item.data} />;
    } else if (item.type === "relatedArticles") {
      return <RelatedArticles articles={item.data} />;
    }
    return null;
  }, []);

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
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Header />

            <FlatList
              data={data}
              renderItem={renderComponent}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      )}
    </SafeArea>
  );
};

export default MainScreen;
