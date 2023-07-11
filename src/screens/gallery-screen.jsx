import React from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import SafeArea from "../components/safe-area";
import { Ionicons } from "@expo/vector-icons";

const GalleryScreen = () => {
  const images = [
    { id: "1", source: require("../../assets/photo.jpeg") },
    { id: "2", source: require("../../assets/photo.jpeg") },
    { id: "3", source: require("../../assets/photo.jpeg") },
    { id: "4", source: require("../../assets/photo.jpeg") },
    { id: "5", source: require("../../assets/photo.jpeg") },
    { id: "6", source: require("../../assets/photo.jpeg") },
    { id: "7", source: require("../../assets/photo.jpeg") },

    // Add more images as needed
  ];

  const renderItem = ({ item }) => (
    <Image source={item.source} style={styles.image} />
  );

  return (
    <SafeArea>
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
          }}
        >
          <FlatList
            data={images}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
          />
        </View>
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    margin: 5,
    resizeMode: "cover",
    borderRadius: 5,
  },
});

export default GalleryScreen;

// import React, { useEffect, useState } from "react";
// import { View, Image, FlatList } from "react-native";

// const GalleryScreen = () => {
//   const [photos, setPhotos] = useState([]);

//   useEffect(() => {
//     // Assuming you have obtained an access token through the authentication process
//     const accessToken = "<your_access_token>";

//     // Fetch the user's photos from Google Photos API
//     fetchGooglePhotos(accessToken)
//       .then((photos) => {
//         setPhotos(photos);
//       })
//       .catch((error) => {
//         console.error("Error fetching photos:", error);
//       });
//   }, []);

//   const fetchGooglePhotos = async (accessToken) => {
//     const url = "https://photoslibrary.googleapis.com/v1/mediaItems";
//     const headers = {
//       Authorization: "Bearer " + accessToken,
//       "Content-Type": "application/json",
//     };

//     const response = await fetch(url, { headers });
//     const data = await response.json();

//     if (data.mediaItems) {
//       return data.mediaItems;
//     } else {
//       throw new Error("No photos found.");
//     }
//   };

//   const renderPhotoItem = ({ item }) => {
//     return (
//       <View>
//         <Image
//           source={{ uri: item.baseUrl }}
//           style={{ width: 100, height: 100 }}
//         />
//       </View>
//     );
//   };

//   return (
//     <View>
//       <FlatList
//         data={photos}
//         renderItem={renderPhotoItem}
//         keyExtractor={(item) => item.id}
//         numColumns={3} // Adjust the number of columns as desired
//       />
//     </View>
//   );
// };

// export default GalleryScreen;
