import React from "react";
import { View, Text, StyleSheet, Button, Linking} from "react-native";

const Challenge1 = () => {
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
      justifyContent:"center",
      alignItems:"center",
      padding:50,
      margin:"auto",
      borderWidth:  1,
      borderStyle:  'solid',
    },


    textStyle: {
     margin:25,
      justifyContent:"center",
      alignItems:"center",
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
        backgroundColor:"blue",
        borderColor:"darkblue",
        },
    
    repeat:{
        borderWidth:  3,
        borderStyle:'double',
        marginTop:20,
        padding:20,
        fontSize:30,
        textAlign:"center",
        fontFamily:"josefinSans",
        textShadowOffset: {width:-3 ,height:4},
        textShadowRadius:10,
        textShadowColor:"rgba(0,0,0,0.75)",  
        fontStyle:"italic",
        fontVariant:['small-caps'],  
    
    },


});
  

export default Challenge1;