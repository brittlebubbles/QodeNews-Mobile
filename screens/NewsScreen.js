import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
  Feather,
} from "@expo/vector-icons";
import axios from "axios";

const NewsScreen = ({ navigation }, props) => {
  //Setting States
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  //Using the useEffect Hook to mount the API
  useEffect(() => {
    getNews();
  }, []);

  //Get Request to API enpoint
  function getNews() {
    axios
      .get(
        "https://learnappmaking.com/ex/news/articles/Apple?secret=CHWGk3OTwgObtQxGqdLvVhwji6FsYm95oe87o3ju"
      )
      .then(async function (response) {
        setNews(response.data);
        // console.log(response.data.articles);
        setLoading(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //Checks to see if The News is empty
  if (!getNews) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.discover}>
          <Text style={styles.discoverText}>News</Text>
        </View>
        <View style={styles.icons}>
          <View style={styles.icon}>
            <Ionicons name="ios-search" size={26} color="black" />
          </View>
          <View style={styles.icon}>
            <Feather name="moon" size={24} color="black" />
          </View>
        </View>
      </View>
      {loading ? getNews : <ActivityIndicator size={50} />}
      <FlatList
        data={news.articles}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <View style={styles.newsCard}>
                <View style={styles.newsImage}>
                  <Image
                    source={{ uri: item.image }}
                    style={{ height: "100%", width: "100%" }}
                  />
                </View>
                <View style={{ width: "65%" }}>
                  <Text style={styles.nameApp}>{item.title}</Text>
                  <Text style={styles.appTime}>{item.author}</Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("NewsDetails", {
                        title: item.title,
                        author: item.author,
                        image: item.image,
                        text: item.text,
                      })
                    }
                  >
                    <Entypo
                      name="chevron-with-circle-right"
                      size={24}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: "#F3F6FF",
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  discover: {
    flex: 2.7,
  },
  icons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  discoverText: {
    fontSize: 36,
    fontWeight: "700",
  },
  icon: {
    height: 44,
    width: 44,
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  brands: {
    marginVertical: 13,
    fontSize: 25,
    paddingHorizontal: 15,
    paddingRight: 20,
    fontWeight: "600",
  },
  mainContent: {
    flexDirection: "row",
  },
  verticalContainer: {
    justifyContent: "space-around",
  },
  verticalText: {
    transform: [{ rotate: "-90deg" }],
    color: "gray",
    fontWeight: "600",
    // fontSize: 15,
  },

  docName: {
    fontSize: 35,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 25,
    color: "#2C3650",
  },
  mainCard: {
    marginHorizontal: 5,
    // backgroundColor: "white",
    height: 280,
    // borderRadius: 24,
    // shadowColor: "#2C3650",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.33,
    shadowRadius: 5.62,
    elevation: 4,
  },
  cardTime: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  cardMeta: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    opacity: 0.7,
  },
  cardTimeText: {
    fontSize: 21,
    fontWeight: "500",
    color: "white",
    marginLeft: 15,
  },
  imageRow: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageNameContainer: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    height: 80,
    width: 80,
    borderRadius: 30,
    overflow: "hidden",
    marginRight: 20,
  },
  cta: {
    paddingHorizontal: 20,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  nextApp: {
    marginTop: 35,
    marginBottom: 15,
    color: "#3F729B",
    fontSize: 17,
  },
  newsCard: {
    backgroundColor: "white",
    height: 90,
    marginBottom: 10, //15
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    // borderColor: '#297AFF',
    // borderWidth: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // flexWrap: "wrap",
  },
  newsImage: {
    height: 80,
    width: 80,
    borderRadius: 20,
    overflow: "hidden",
  },
  nameApp: {
    fontSize: 14, //16
    fontWeight: "bold",
    marginBottom: 2,
    marginTop: 2,
    color: "#2C3650",
  },
  appTime: {
    fontSize: 16,
    fontWeight: "500",
    color: "#3F729B",
    flexWrap: "wrap",
  },
  container: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: "#F3F6FF",
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  discover: {
    flex: 2.7,
  },
  icons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  discoverText: {
    fontSize: 36,
    fontWeight: "700",
  },
  icon: {
    height: 44,
    width: 44,
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  brands: {
    marginVertical: 13,
    fontSize: 25,
    paddingHorizontal: 15,
    paddingRight: 20,
    fontWeight: "600",
  },
  mainContent: {
    flexDirection: "row",
  },
  verticalContainer: {
    justifyContent: "space-around",
  },
  verticalText: {
    transform: [{ rotate: "-90deg" }],
    color: "gray",
    fontWeight: "600",
    // fontSize: 15,
  },

  docName: {
    fontSize: 35,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 25,
    color: "#2C3650",
  },
  mainCard: {
    marginHorizontal: 5,
    // backgroundColor: "white",
    height: 280,
    // borderRadius: 24,
    // shadowColor: "#2C3650",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.33,
    shadowRadius: 5.62,
    elevation: 4,
  },
  cardTime: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  cardMeta: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    opacity: 0.7,
  },
  cardTimeText: {
    fontSize: 21,
    fontWeight: "500",
    color: "white",
    marginLeft: 15,
  },
  imageRow: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageNameContainer: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    height: 80,
    width: 80,
    borderRadius: 30,
    overflow: "hidden",
    marginRight: 20,
  },
  cta: {
    paddingHorizontal: 20,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  nextApp: {
    marginTop: 35,
    marginBottom: 15,
    color: "#3F729B",
    fontSize: 17,
  },
});
