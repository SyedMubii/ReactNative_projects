import React from "react";
import { StyleSheet, View, Text, Button, Alert, TouchableOpacity, Image } from "react-native";

// button is self closing 
// TouchableOpacity is no self closing

 const OurButton1 = () => {
   return ( 
     <View>
<Text style={styles.textStyle}>Button</Text>
 <TouchableOpacity
 
    // title not allowed
//  title="Join Now"
 //disbaled the button
//disabled
onPress={() => {

console.log("Clicking Time");   
 Alert.alert("Hi Everyone this is 1st app");

}}>
  <Image  style={styles.imag1} source={require("../../assets/img1.jpeg")} />
<Text>Join Now</Text>
{/* <Text>Join Now</Text>
<Text>Join Now</Text>
<Text>Join Now</Text>
<Text>Join Now</Text> */}
 
</TouchableOpacity>

{/* button */}
<Button title="Join Now"
//disbaled the button

onPress={() => {

//console.log("Clicking Time");   
Alert.alert("Hi Everyone this is 1st app");

}}
  
/>

   </View>
 );
};
const styles = StyleSheet.create({
  textStyle: {
    textAlign:"center",
    marginVertical:150,
    fontSize:20,
},
imag1:{
  width:150,
  height:150,
},
 });
 
 export default OurButton1;