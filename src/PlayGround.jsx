import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const { height, width } = Dimensions.get("window");
function PlayGround() {
  return (
    <View style={styles.courtContainer}>
        <View style={{flexDirection:"column"}}>
      <View
        style={styles.cornerBox}
      >

      </View>
      <View style={styles.boxx}></View>
      
      <View style={styles.boxx}></View>
      <View
        style={styles.cornerBoxx}
      >

      </View>
      </View>
      <View style={{flexDirection:"row"}}>
      <View style={styles.boxxx}>

</View>
      <View style={styles.boxxp}>
        

</View>
<View style={styles.cornerBoxc}></View>

</View>
<View style={{flexDirection:"row"}}>
<View  style={styles.playerBox}>
  
    <Text  style={styles.playerText}>Player 1</Text>
    <View style={styles.foreHand}>
      <Text>Backhand</Text>
    </View>

</View>
<View style={styles.playerBox2} >
<Text style={styles.playerText}>Player 2</Text>
<View style={styles.foreHand}>
  <Text>Forehand</Text>
</View>

</View>
<View style={styles.boxend}>

</View>

</View>
<View style={{flexDirection:'row'}}>
<View style={styles.playerBox3}>
<View style={styles.foreHandp}>
  <Text>Forehand</Text>
</View>
    <Text style={styles.playerText}> Player 3</Text>
    


</View>
<View style={styles.playerBox4}>
<View style={styles.backHandp}>
  <Text>Backhand</Text>
</View>
    <Text style={styles.playerText}>Player 4</Text>
   


</View>
<View style={styles.boxendL}>

</View>

</View>
<View style={{flexDirection:"row"}}>
<View style={styles.box1}>

</View>
<View style={styles.box2}>

</View>
<View style={styles.endBox}>

</View>
</View>

      
    </View>
  );
}
const styles = StyleSheet.create({
  courtContainer: {
    backgroundColor: "#176E42",
    height: hp(50),
    width: wp(100),
    marginTop: 2,
  },
  cornerBox: {
    height: hp(5),
    width: wp(10),
    backgroundColor: "#176E42",
    borderColor: "white",
    borderWidth: 2,
    marginLeft: 10,
    marginTop: 5,
  },
  boxx: {
    height: hp(19),
    width: wp(10),
    backgroundColor: "#176E42",
    borderColor: "white",
    borderWidth: 2,
    marginLeft:10
  },
  cornerBoxx:{
    height: hp(5),
    width: wp(10),
    backgroundColor: "#176E42",
    borderColor: "white",
    borderWidth: 2,
    marginLeft: 10.5,

  


  },
  boxxx: {
    height: hp(5),
    width: wp(40),
    backgroundColor: "#176E42",
    borderColor: "white",
    borderWidth: 2.5,
    marginLeft:40,
    marginTop:-409.5
  },
  boxxp: {
    height: hp(5),
    width: wp(40),
    backgroundColor: "#176E42",
    borderColor: "white",
    borderWidth: 2,
    
    marginTop:-409.5
  },
  cornerBoxc: {
    height: hp(5),
    width: wp(10),
    backgroundColor: "#176E42",
    borderColor: "white",
    borderWidth: 2,
    marginRight:20,
    marginTop:-409,
  },
  playerBox:{
   
    height: hp(19),
    width: wp(40),
    backgroundColor: "#176E42",
    borderColor: "white",
    borderWidth: 2,
    marginLeft: 42,
    marginTop:-366.5,
    alignItems:"center",
    justifyContent:"center"
    

  },
  playerBox2:{
   
    height: hp(19),
    width: wp(40),
    backgroundColor: "#176E42",
    borderColor: "white",
    borderWidth: 2,
    marginLeft:-3,
    alignItems:"center",
    justifyContent:"center",
    
    marginTop:-366.5
    

  },
  boxend:{
    height: hp(19),
    width: wp(10),
    backgroundColor: "#176E42",
    borderColor: "white",
    borderWidth: 2,
    
    marginTop:-366.8
  },
  playerBox3:{
   
    height: hp(19),
    width: wp(40),
    backgroundColor: "#176E42",
    borderColor: "white",
    borderWidth: 2,
    marginLeft: 42,
    marginTop:-205,
    alignItems:"center",
    justifyContent:"center"
    

  },
  playerBox4:{
   
    height: hp(19),
    width: wp(40),
    backgroundColor: "#176E42",
    borderColor: "white",
    borderWidth: 2,
    marginLeft:-2,
    marginTop:-205,
    alignItems:"center",
    justifyContent:"center"
    

  },
  boxendL:{
    height: hp(19),
    width: wp(10),
    backgroundColor: "#176E42",
    borderColor: "white",
    borderWidth: 2,
    
    marginTop:-205
  },
  box1:{
    height: hp(5),
    width: wp(40),
    backgroundColor: "#176E42",
    borderColor: "white",
    borderWidth: 2,
    marginLeft:40,
    marginTop:-43.5

  },
  box2:{
    height: hp(5),
    width: wp(40),
    backgroundColor: "#176E42",
    borderColor: "white",
    borderWidth: 2,
    
    marginTop:-43.5

  },
  endBox:{
    height: hp(5),
    width: wp(10),
    backgroundColor: "#176E42",
    borderColor: "white",
    borderWidth: 2,

    marginTop: -44,

  },
  playerText:{
    fontSize:16,
    color:"#fff",


  },
  foreHand:{
    width:wp(40),
    height:hp(9),
    backgroundColor:"#D3D3D3",
    marginTop:63,
    alignItems:"center",
    justifyContent:"center"




  },
  backHand:{
    width:wp(40),
    height:hp(9),
    backgroundColor:"#D3D3D3",
    marginTop:63,
    alignItems:"center",
    justifyContent:"center"




  },
  foreHandp:{
    width:wp(40),
    height:hp(9),
    backgroundColor:"#D3D3D3",
    marginBottom:63,
    alignItems:"center",
    justifyContent:"center"




  },
  backHandp:{
    width:wp(40),
    height:hp(9),
    backgroundColor:"#D3D3D3",
    marginBottom:63,
    alignItems:"center",
    justifyContent:"center",
     



  }
  
});

export default PlayGround;
