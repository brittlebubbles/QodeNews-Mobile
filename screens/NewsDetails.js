import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
  Feather,
} from "@expo/vector-icons";

const NewsDetails = ({ route, navigation }) => {
  const { title, author, image, text } = route.params;

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={{ uri: image }}
          style={styles.image}
          imageStyle={{
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        >
          {/* <Text style={styles.pictureTitle}>{title}</Text>
          <Text style={styles.authorTitle}>{author}</Text> */}

          <TouchableOpacity
            style={{ position: "absolute", left: 20, top: 40 }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Feather name="chevron-left" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ position: "absolute", right: 20, top: 40 }}
          >
            <Feather name="heart" size={29} color="white" />
          </TouchableOpacity>
        </ImageBackground>

        <ScrollView>
          <Text
            style={{
              padding: 14,
              fontSize: 19,
              fontWeight: "bold",
              paddingBottom: 10,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              padding: 14,
              fontSize: 15,
              fontWeight: "normal",
              opacity: 0.5,
              paddingTop: 1,
            }}
          >
            {author}
          </Text>
          <Text
            style={{
              paddingHorizontal: 14,
              fontSize: 15,
              fontWeight: "normal",
              opacity: 0.7,
              justifyContent: "flex-start",
              textAlign: "justify",
              lineHeight: 26,
            }}
          >
            {text}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    // paddingTop: 70,
    justifyContent: "center",
    // backgroundColor: "#fff",
  },
  image: {
    height: 380,
    justifyContent: "flex-end",
  },
  pictureTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 14,
    marginVertical: 6,
  },
  authorTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 14,
    marginBottom: 30,
  },
});
