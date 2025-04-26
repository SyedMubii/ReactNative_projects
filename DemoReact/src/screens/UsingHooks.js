import React , {useState} from "react";
import { StyleSheet, View, Text, TouchableOpacity} from "react-native";

const Hook = () => {
    const [counter,setCounter] = useState(0);
  
  //  let counter=0;
    return ( 
      <View  style={styles.text}>
<Text>{counter}</Text>
  <TouchableOpacity  
 onPress={() => {
    setCounter(counter+10);
 console.log(counter);}}>
 <Text>+10</Text>
 </TouchableOpacity>

 <TouchableOpacity  
 onPress={() => {
    setCounter(0);
 console.log((counter));}}>
 <Text>Reset</Text>
 </TouchableOpacity>

 <TouchableOpacity  
 onPress={() => {
    if (counter>0)
    setCounter(counter-10);
 console.log("Clicking Time");}}>
 <Text>-10</Text>
 </TouchableOpacity>
 </View> );};


const styles=StyleSheet.create({
    text:{
        textAlign:"center", 
        marginTop:180,
        paddingTop:50,   
    },
});
 
 export default Hook;