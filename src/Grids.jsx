import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import PlayGround from "./PlayGround";
import GroundImg from "./GroundImg";

const { height, width } = Dimensions.get("window");

const Grids = () => {
  const [points, updatePoints] = useState(0);

  const incrementPoint = () => {
    updatePoints(points + 1);
  };

  const shotsData = [
    {
      title: "Clear/Lob",
    },
    {
      title: "Drop Shot",
    },
    {
      title: "Smash",
    },
    {
      title: "Serve",
    },
  ];
  const netshotsData = [
    {
      title: "Net Shot",
    },
    {
      title: "Net Kill",
    },
    {
      title: "Net Lift",
    },
    {
      title: "Drive",
    },
  ];

  return (
    <View>
      <View style={styles.centeredContent}>
          <Text style={styles.textG}>Game Point: {points}</Text>  
          <Text style={styles.textGolden}>Golden Point: 31</Text>
          <Text style={styles.textP1}>Player1/Player2</Text>
          <Text style={styles.textP3}>Player3/Player4</Text>
        </View>   
      <View style={styles.rowContainer}>
        {shotsData.map((item, index) => (
          <TouchableOpacity style={styles.item} key={index}>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        onPress={incrementPoint} 
        activeOpacity={0.7}
        style={styles.counterContainer}
      >
        <Text style={styles.counterText}>+1</Text>
      </TouchableOpacity>

      <PlayGround/>

      <TouchableOpacity
        onPress={incrementPoint}
        activeOpacity={0.7}
        style={styles.counterContainerNet}
      >
        <Text style={styles.counterText}>+1</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row" }}>
        {netshotsData.map((item, index) => (
          <TouchableOpacity style={styles.item} key={index}>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* <GroundImg points={points}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    marginTop: 160,
    marginRight: 1,
  },
  item: {
    width: wp(24),
    height: hp(12),
    backgroundColor: "#56B283",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 4,
    borderRadius: 2,
  },
  title: {
    color: "white",
    fontSize: 16,
  },
  counterContainer: {
    height: hp(4),
    width: wp(100),
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  counterText: {
    fontWeight: "bold",
  },
  divider: {
    height: 2,
    width: "100%",
    backgroundColor: "white",
    marginBottom: 2,
  },
  rowContainerNet: {
    flexDirection: "row",
    marginTop: 0,
    marginRight: 5,
  },
  counterContainerNet: {
    height: hp(4),
    width: wp(100),
    backgroundColor: "white",
    marginTop: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  textG: {
    color: "white",
    fontSize: 16,
    position: "absolute",
    zIndex: 1,
    padding: 5,
    top: 40,
    left: 20,
  },
  textGolden: {
    color: "white",
    fontSize: 16,
    position: "absolute",
    zIndex: 1,
    padding: 5,
    top: 60,
    left: 20,
  },
  textP1: {
    color: "white",
    fontSize: 16,
    position: "absolute",
    zIndex: 1,
    padding: 5,
    top: 100,
    left: 20,
  },
  textP3: {
    color: "white",
    fontSize: 16,
    position: "absolute",
    zIndex: 1,
    padding: 5,
    top: 120,
    left: 20,
  },
  centeredContent: {
    alignItems: "center",
  },
});

export default Grids;
