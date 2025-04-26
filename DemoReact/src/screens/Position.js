import React from "react";
import { View, Text, StyleSheet} from "react-native";

const Box2 = () => {
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
            <Text style={[styles.list4,styles.repeat]}>
                Netflix Card
            </Text>
            <Text style={[styles.list5,styles.repeat]}>
                Netflix Card
            </Text>
        
        </View>
      
        );
};


const styles = StyleSheet.create({
    textStyle1: {
    
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
       top:"40%",
        left:"40%",
        // alignSelf:""
    },

    list3:{

        backgroundColor:"blue",
        borderColor:"darkblue",
        right:0,
        },
        list4:{

            backgroundColor:"blue",
            borderColor:"darkblue",
            right:0,
            bottom:0,
            },

            list5:{

                backgroundColor:"blue",
                borderColor:"darkblue",
                bottom:0,
                },
        
    
    repeat:{
        borderWidth:  3,
        borderStyle:'double',
        width:"20%",
        height:100,
        fontSize:30,
        position:"absolute",
        fontFamily:"josefinSans",
        textShadowOffset: {width:-3 ,height:4},
        textShadowRadius:10,
        textShadowColor:"rgba(0,0,0,0.75)",  
        fontStyle:"italic",
        fontVariant:['small-caps'],  
    
    },


});
  

export default Box2;