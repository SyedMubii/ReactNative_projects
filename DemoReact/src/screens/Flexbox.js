import React from "react";
import { View, Text, StyleSheet} from "react-native";

const Box1 = () => {
    return(
        <View style={styles.textStyle1}>
        {/* repeated css syntax */}
            <Text style={[styles.list1,styles.repeat]}>
                Netflix Card
            </Text>
            <Text style={[styles.list2,styles.repeat]}>
                Netflix Card
            </Text>
            <Text style={[styles.list3,styles.repeat]}>
                Netflix Card
            </Text>
        
        </View>
      
        );
};


const styles = StyleSheet.create({
    textStyle1: {
//move direction
    // flexDirection:"row",
    // flexDirection:"column",
    // flexDirection:"column-reverse",
    // flexDirection:"row-reverse",
    
//move vertically and horizontally
    // alignItems:"center",
    // justifyContent:"center", 
    // justifyContent:"space-between", 
    // justifyContent:"space-around", 
    justifyContent:"space-evenly",
//use space
// flex:1,
    
    height:700,
      borderWidth:  1,
      borderStyle:  'solid',
    },
 
    list1:{
        backgroundColor:"lightblue",
        borderColor:"blue",   
    },

    list2:{
        backgroundColor:"lightgrey",
        borderColor:"darkgrey",
    },

    list3:{
        //multiple Box changing
alignSelf:"center",

        backgroundColor:"blue",
        borderColor:"darkblue",
        },
    
    repeat:{
        borderWidth:  3,
        borderStyle:'double',
        width:"20%",
        height:100,
                // marginTop:20,
        // padding:20,
        fontSize:30,
        // textAlign:"center",
        fontFamily:"josefinSans",
        textShadowOffset: {width:-3 ,height:4},
        textShadowRadius:10,
        textShadowColor:"rgba(0,0,0,0.75)",  
        fontStyle:"italic",
        fontVariant:['small-caps'],  
    
    },


});
  

export default Box1;