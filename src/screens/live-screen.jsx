import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Video } from "expo-av";
import axios from "axios";
import SafeArea from "../components/safe-area";

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        " https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLKMb_3v_GIXmfjtiAHUfBAjWUeP0bZsAp&key=AIzaSyBaG2RWY4O6R6WFq49Ffo2Y86NwHDp7UVs"
      );

      setVideos(response.data.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const renderVideoItem = ({ item }) => {
    const videoId = item.contentDetails.videoId;
    const thumbnail = item.snippet.thumbnails.maxres.url;
    const title = item.snippet.title;

    // console.log(videoId,thumbnail,title)
    return (
      <TouchableOpacity
        style={styles.videoContainer}
        onPress={() => playVideo(videoId)}
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

  const playVideo = async (videoId) => {
    try {
      await Video.requestPermissionsAsync();
      const { status } = await Video.getPermissionsAsync();

      if (status === "granted") {
        await Video.setIsEnabledAsync(true);
        await Video.setFullscreen(true);
        await Video.loadAsync({
          uri: `https://www.youtube.com/watch?v=Hi9iCXl8WsE`,
        });
      }

      // <Video
      //   source={{ uri: `https://www.youtube.com/watch?v=${videoId}` }}
      //   // resizeMode="contain"
      //   useNativeControls
      //   style={styles.videoPlayer}
      // />;
    } catch (error) {
      console.error("Error playing video:", error);
    }
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
    // backgroundColor: "#F5FCFF",
  },
  videoContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  thumbnail: {
    width: 360,
    height: 180,
    borderRadius: 10,
    position: "relative",
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    maxWidth: 360,
    fontWeight: "bold",
    position: "absolute",
    bottom: 10,
    backgroundColor: "red",
  },

  videoPlayer: {
    width: "100%",
    height: 300,
  },
});

export default VideoGallery;
