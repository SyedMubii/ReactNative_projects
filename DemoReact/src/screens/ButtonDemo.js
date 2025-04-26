import React from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";

 const OurButton = () => {
   return ( 
     <View>
<Text style={styles.textStyle}>Button</Text>
   <Button title="Join Now"
//disbaled the button
//disabled
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
 });
 
 export default OurButton;