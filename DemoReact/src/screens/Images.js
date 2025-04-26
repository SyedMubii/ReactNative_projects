import React from "react";
//import { View, Text, StyleSheet, Image} from "react-native";
import { View } from "react-native";
import CardDetails from "../Components/Card";


const Image1 = () => {
    return(
        // <View style={styles.textStyle}>
<View>
            {/* <Image style={styles.imageStyle}
            source={require("../../assets/img1.jpeg")} ></Image>
        <Text style={styles.listStyle}>Image 1</Text>           */}
      {/* //allow multiple data */}
      <CardDetails textData="1st Image"
      imgSrc={require("../../assets/img1.jpeg")} />
      {/* <CardDetails textData="2nd Image"
      imgSrc={require("../../assets/img1.jpeg")}  />
      
      <CardDetails /> */}
        </View>
    );
};

// const styles = StyleSheet.create({
//     textStyle: {
//         // paddingTop:"100px",
//         height:500,
//     // display:"flex",
//     //   justifyContent:"center",
//       alignItems:"center",
//     },
//     listStyle:{
//         fontSize:30,
      
//     },
//     imageStyle:{
       
//         width:200,
//         height:200,

//     },
// });
  

export default Image1;