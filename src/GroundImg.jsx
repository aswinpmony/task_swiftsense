import React from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  Button,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const { height, width } = Dimensions.get("window");

const GroundImg = ({ points }) => {
  // const incrementPoint = () => {
  //   updatePoints(points + 1);
  //   console.log("increment updated", points);
  // };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" translucent={false} />
      <ImageBackground
        style={styles.image}
        source={require("../assets/bgImg.jpg")}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: 14, width: 10, marginLeft: 4 }}
            source={require("../assets/iconBack.png")}
          />
          <Text style={styles.text}>Go Back</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: hp(100),
    width: wp(100),
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 13,
    position: "absolute",
    zIndex: 1,
    padding: 16,
  },
  
  centeredContent: {
    alignItems: "center",
  },
  buttonP: {
    backgroundColor: "yellow",
    height: 5,
    width: 8,
    borderRadius: 3,
    position: "absolute",
    zIndex: 10,
  },
  buttonE: {
    backgroundColor: "yellow",
    height: 5,
    width: 8,
    borderRadius: 3,
    position: "absolute",
    zIndex: 10,
  },
});

export default GroundImg;
