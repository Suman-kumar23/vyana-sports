import { StyleSheet, View, AppState } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import YoutubeIframe from "react-native-youtube-iframe";
import { useRoute } from "@react-navigation/native";

const VideoScreen = ({ navigation }) => {
  const [playing, setPlaying] = useState(true);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      navigation.navigate("Live");
    }
  }, []);
  const route = useRoute();
  const videoId = route.params.videoId;

  return (
    <View style={styles.container}>
      <YoutubeIframe
        height={300}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
        initialPlayerParams={{
          rel: false,
          modestbranding: true,
          start: 1,
        
        }}
      />
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
});
