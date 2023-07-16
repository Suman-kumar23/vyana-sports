import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import CarouselCardItem from "./carousel-card-item";
import axios from "axios";

// const data = [
//   { id: 1, title: "Title 1", source: "https://picsum.photos/200" },
//   { id: 2, title: "Title 2", source: "https://picsum.photos/300" },
//   { id: 3, title: "Title 3", source: "https://picsum.photos/400" },
//   { id: 4, title: "Title 4", source: "https://picsum.photos/500" },
//   { id: 5, title: "Title 5", source: "https://picsum.photos/600" },
//   { id: 6, title: "Title 6", source: "https://picsum.photos/700" },
// ];

const CarouselCard = ({ mainCarouselData }) => {
  // const [mainCarouselData, setMainCarouselData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const response = await axios.get(
  //     `https://okhfigjs.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%27main_carousel%27%5D`
  //   );
  //   const data = response.data.result;
  //   console.log(data);
  //   setMainCarouselData(data);
  // };

  const handleCardPress = () => {};
  return (
    <View
      style={{
        marginTop: 5,
        // backgroundColor: "red",
        height: 250,
        width: "100%",
      }}
    >
      <FlatList
        data={mainCarouselData}
        renderItem={({ item }) => (
          <CarouselCardItem item={item} handleCardPress={handleCardPress} />
        )}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{}}
        horizontal
      />
    </View>
  );
};

export default CarouselCard;
