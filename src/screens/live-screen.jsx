import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import axios from "axios";
import SafeArea from "../components/safe-area";

const VideoGallery = ({ navigation }) => {
  const [videos, setVideos] = useState([]);
  const [Vid, setVid] = useState();
  const apiKey = "AIzaSyBaG2RWY4O6R6WFq49Ffo2Y86NwHDp7UVs";
  const playlistId = "PLKMb_3v_GIXmfjtiAHUfBAjWUeP0bZsAp";

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=10&playlistId=${playlistId}&key=${apiKey}`
        );

        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  const renderVideoItem = ({ item }) => {
    const videoId = item.contentDetails.videoId;
    const thumbnail = item.snippet.thumbnails.maxres.url;
    const title = item.snippet.title;

    // console.log(videoId,thumbnail,title)
    return (
      <TouchableOpacity
        style={styles.videoContainer}
        onPress={() =>
          navigation.navigate("Player", {
            videoId: videoId,
          })
        }
      >
        <Image
          source={{ uri: thumbnail }}
          style={styles.thumbnail}
          resizeMode="cover"
        />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeArea>
      <View style={styles.container}>
        <FlatList
          data={videos}
          renderItem={renderVideoItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF",
  },
  videoContainer: {
    marginVertical: 10,
    marginHorizontal: "5%",
    alignItems: "center",
  },
  thumbnail: {
    width: 360,
    height: 180,
    borderRadius: 10,
    position: "relative",
    opacity: 0.9,
  },
  title: {
    fontSize: 16,
    maxWidth: 350,
    fontWeight: "bold",
    position: "absolute",
    bottom: 10,
    color: "white",
    alignContent: "center",
  },

  videoPlayer: {
    width: "100%",
    height: 300,
  },
  youtubePlayer: {
    alignSelf: "stretch",
    height: 300,
  },
});

export default VideoGallery;
